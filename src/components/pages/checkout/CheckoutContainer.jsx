import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El teléfono no cumple los requisitos"),
    }),
    onSubmit: (data) => {
      const order = {
        buyer: data,
        items: cart,
        total: total,
      };

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order)
        .then((res) => setOrderId(res.id))
        .catch((error) => console.error("Error generando la orden: ", error));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        })
          .then(() => console.log("Stock Actualizado Correctamente"))
          .catch((error) =>
            console.error("Error actualizando el stock de productos ", error)
          );
      });

      clearCart();
    },
  });

  return (
    <div>
      {orderId ? (
        <h1>Su compra fue exitosa, el número de comprobante es: {orderId}</h1>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
