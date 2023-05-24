export const ItemListContainer = ({ Precio, Cantidad }) => {
  //console.log(props);
  return (
    <>
      <h1>Productos</h1>
      <h3>
        Algodon / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </h3>
      <h3>
        Gasa / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </h3>
      <h3>
        Jeringas / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </h3>
    </>
  );
};
