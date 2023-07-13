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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"; // Importo el icono AddCircleOutline para el Widget Plus de las Cards
import "./ItemListContainer.css";
// Importo las imagenes de los productos
import ibupiracImage from "../img/ibupiracImage.jpg";
import geniolImage from "../img/geniolImage.jpg";
import balanzaImage from "../img/balanzaImage.jpg";

//Armo el Array con la info de los productos
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

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Filtrar los productos según la categoría elegida
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
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
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
                <Box className="widget-container">
                  <AddCircleOutlineIcon className="widget" />{" "}
                  {/* Aun no tiene accion, pero ya dejo agregado el icono "+"" AddCircleOutline en las Cards */}
                </Box>
              </Card>
            </Box>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
