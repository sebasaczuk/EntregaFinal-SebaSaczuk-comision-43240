import React from "react";
//import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ProductDetails = ({ location }) => {
  const { product } = location.state; // Intento Obtener los datos del producto de la prop location

  return (
    <div>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2">{product.description}</Typography>
    </div>
  );
};

export default ProductDetails;
