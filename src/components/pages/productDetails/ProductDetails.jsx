import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="product-details-container">
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
    </div>
  );
};

export default ProductDetails;
