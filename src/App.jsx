import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "../src/components/pages/productList/ItemListContainer";
import ProductDetails from "../src/components/pages/productDetails/ProductDetails";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Meto todos los componentes con el enrutador */}
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Pharmastock
              </Link>
            </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Typography variant="div" sx={{ mt: 2 }}>
          <br />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Typography>
      </Container>
    </Router>
  );
};

export default App;
