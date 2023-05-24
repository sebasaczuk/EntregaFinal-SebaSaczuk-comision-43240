//import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/productList/ItemListContainer";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";

function App() {
  let Precio = "100";
  let Cantidad = "3";

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PharmaStock
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Typography variant="div" sx={{ mt: 2 }}>
        <ItemListContainer Precio={Precio} Cantidad={Cantidad} />
      </Typography>
    </Container>
  );
}

export default App;
