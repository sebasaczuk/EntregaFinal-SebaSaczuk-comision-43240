import React from "react";
import { Badge } from "@mui/material";
import { BsCart2 } from "react-icons/bs";

//Recibo en una prop "badge" el numero fijo que muestro hardcodeado junto al Cart.

const CartWidget = ({ badge }) => {
  return (
    <React.Fragment>
      <BsCart2 />
      {badge && (
        <Badge
          color="error"
          badgeContent={badge}
          sx={{ marginLeft: "0.5rem" }}
        />
      )}
    </React.Fragment>
  );
};

export default CartWidget;
