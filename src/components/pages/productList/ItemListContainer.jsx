import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import "./ItemListContainer.css";
//import ibupiracImage from "../assets/img/ibupirac.jpg";

const products = [
  {
    name: "Ibupirac",
    image: "../src/assets/img/ibupirac.jpg",
    category: "Medicamentos",
    description: "IBUPROFENO + CLORFENIRAMINA + FENILEFRINA",
  },
  {
    name: "Geniol Paracetamol Forte 650",
    image: "../src/assets/img/geniol.jpg",
    category: "Medicamentos",
    description: "PARACETAMOL RAPIDA ACCION COMPRIMIDOS X12",
  },
  {
    name: "Balanza Electronica hasta 180kgs",
    image: "../src/assets/img/balanza.jpg",
    category: "Electro",
    description: "Balanza Cristal Electronica hasta 180kgs a Pilas AA",
  },
];

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h3 className="filter-heading">Filtrar por Categoría</h3>
      <div className="button-container">
        <Button
          className="filter-button"
          variant="contained"
          onClick={() => handleCategoryChange(null)}
        >
          Todos
        </Button>
        <Button
          className="filter-button"
          variant="contained"
          onClick={() => handleCategoryChange("Medicamentos")}
        >
          Medicamentos
        </Button>
        <Button
          className="filter-button"
          variant="contained"
          onClick={() => handleCategoryChange("Electro")}
        >
          Electro
        </Button>
      </div>
      <div className="card-container">
        {filteredProducts.map((product, index) => (
          <Link
            to={{ pathname: `/product/${index}`, state: { product: product } }}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Box className="card-container">
              <Card className="card">
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
            </Box>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
