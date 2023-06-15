import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "./ProductDetails.css";
import ibupiracImage from "../img/ibupiracImage.jpg";
import geniolImage from "../img/geniolImage.jpg";
import balanzaImage from "../img/balanzaImage.jpg";

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Ibupirac",
      image: ibupiracImage,
      category: "Medicamentos",
      description: "IBUPROFENO + CLORFENIRAMINA + FENILEFRINA",
    },
    {
      id: 2,
      name: "Geniol Paracetamol Forte 650",
      image: geniolImage,
      category: "Medicamentos",
      description: "PARACETAMOL RAPIDA ACCION COMPRIMIDOS X12",
    },
    {
      id: 3,
      name: "Balanza Electronica hasta 180kgs",
      image: balanzaImage,
      category: "Electro",
      description: "Balanza Cristal Electronica hasta 180kgs a Pilas AA",
    },
  ];
  // Buscar el producto por ID
  const product = products.find((product) => product.id === parseInt(id));

  let image;

  if (product) {
    const foundProduct = products.find((p) => p.id === product.id);
    if (foundProduct) {
      image = foundProduct.image;
    }
  }
  //console.log("Image:", image);
  return (
    <div className="product-details-container">
      {product ? (
        <Card>
          <CardMedia
            className="media"
            component="img"
            image={image}
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
