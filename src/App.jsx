import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "../src/components/pages/productList/ItemListContainer";
import ProductDetails from "../src/components/pages/productDetails/ProductDetails";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import CartContextProvider from "./context/CartContext";
import CartPage from "./components/pages/cart/CartPage";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
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
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Routes>
          </Typography>
        </Container>
      </Router>
    </CartContextProvider>
  );
};

export default App;
