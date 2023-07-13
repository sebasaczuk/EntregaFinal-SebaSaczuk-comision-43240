import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "./ProductDetails.css";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="product-details-container">Cargando...</div>;
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
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Producto no encontrado</Typography>
      )}
    </div>
  );
};

export default ProductDetails;
