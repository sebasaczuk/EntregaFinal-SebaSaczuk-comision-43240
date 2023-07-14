import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { FadeLoader } from "react-spinners";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtengo los documentos de la colección "products" desde Firestore
    const fetchItems = async () => {
      const data = await getDocs(collection(db, "products"));
      if (data.size === 0) {
        console.log("Sin resultados");
      } else {
        setProducts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Mostrar el spinner de carga mientras traigo los productos
  if (loading) {
    return (
      <div className="loading-container">
        <FadeLoader color="#1976d2" loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div>
      <h3 className="filter-heading">Filtrar por Categoría</h3>
      <div className="button-container2">
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
