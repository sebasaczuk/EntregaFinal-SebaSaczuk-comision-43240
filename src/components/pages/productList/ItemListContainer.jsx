import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

// Productos que voy a mostrar...
const products = [
  {
    name: "Ibupirac Antigripal Comprimidos",
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

// Ajusto las imagenes en las cards
const useStyles = makeStyles({
  media: {
    width: 90,
    height: 90,
    margin: "auto",
  },
});

const ItemListContainer = () => {
  const classes = useStyles();

  return (
    <div>
      {products.map((product, index) => (
        <Link
          to={{ pathname: `/product/${index}`, state: { product } }}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <Card>
            <CardMedia
              className={classes.media}
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
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;
