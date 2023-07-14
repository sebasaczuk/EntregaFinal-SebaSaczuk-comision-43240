import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
} from "@material-ui/core";
import { FadeLoader } from "react-spinners";
import "./ProductDetails.css";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        setProduct({ id: productDoc.id, ...productDoc.data() });
      } else {
        console.log("No hay productos!");
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (loading) {
    return (
      <div className="product-details-container">
        <FadeLoader color="#1976d2" loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div className="product-details-container">
      {product ? (
        <Card>
          <CardMedia
            className="media"
            component="img"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Categoría: {product.category}
            </Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Typography variant="body2">Precio: ${product.price}</Typography>
            <Typography variant="body2">
              Stock disponible: {product.stock}
            </Typography>
            <TextField
              type="number"
              InputProps={{ inputProps: { min: 1, max: product.stock } }}
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={product.stock === 0} //Deshabilito cuando llego a 0 stock
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Producto no encontrado</Typography>
      )}
    </div>
  );
};

export default ProductDetails;
