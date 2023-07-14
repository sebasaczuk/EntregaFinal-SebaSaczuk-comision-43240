import React, { useContext } from "react";
import { Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from "../../../context/CartContext";
import "./Navbar.css"; // Importa el archivo CSS

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);

  const menuItems = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Acerca de", link: "/about" },
    { id: 3, title: "Servicios", link: "/services" },
    { id: 4, title: "Contacto", link: "/contact" },
    {
      id: 5,
      title: "",
      link: "/cart",
      icon: <CartWidget badge={getTotalItems()} />,
    },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Button
        key={item.id}
        className="navbar-item" // Agrega la clase CSS al botón
        color="inherit" // Restaura el color a "inherit"
        component={Link}
        to={item.link}
        startIcon={item.icon}
      >
        {item.title}
        {item.badge && (
          <Badge
            color="error"
            badgeContent={item.badge}
            sx={{ marginLeft: "0.5rem" }}
          />
        )}
      </Button>
    ));
  };

  return <div className="navbar-container">{renderMenuItems()}</div>;
};

export default Navbar;
