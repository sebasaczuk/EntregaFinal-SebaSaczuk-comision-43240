import React from "react";
import { Button, Badge } from "@mui/material";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const menuItems = [
    { id: 1, title: "Inicio", link: "#" },
    { id: 2, title: "Acerca de", link: "#" },
    { id: 3, title: "Servicios", link: "#" },
    { id: 4, title: "Contacto", link: "#" },
    { id: 5, title: "", link: "#", icon: <CartWidget badge={1} /> },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Button
        key={item.id}
        color="inherit"
        href={item.link}
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

  return <React.Fragment>{renderMenuItems()}</React.Fragment>;
};

export default Navbar;
