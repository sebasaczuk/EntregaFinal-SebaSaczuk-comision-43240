import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, getTotalItems, getTotalPrice, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>
      {cart.map((product) => (
        <div className="product-container" key={product.id}>
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-quantity">Cantidad: {product.quantity}</p>
            <p className="product-price">Precio: {product.price}</p>
          </div>
          <Button
            className="product-button"
            variant="contained"
            color="primary"
            onClick={() => removeFromCart(product.id)}
          >
            Eliminar
          </Button>
        </div>
      ))}
      <h2>Cantidad de Items: {getTotalItems()}</h2>
      <h2>Precio Total: ${getTotalPrice()}</h2>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={clearCart}>
          Vaciar Carrito
        </Button>
        <Button
          variant="contained"
          color="success"
          style={{ marginTop: "20px" }}
          onClick={handleCheckout}
        >
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
