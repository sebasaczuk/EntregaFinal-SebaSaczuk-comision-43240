import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "../src/components/pages/productList/ItemListContainer";
import ProductDetails from "../src/components/pages/productDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";

const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="http://localhost:5173"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Pharmastock
            </a>
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Typography variant="div" sx={{ mt: 2 }}>
        <br />
        <Router>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Typography>
    </Container>
  );
};

export default App;
