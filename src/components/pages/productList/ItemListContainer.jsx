export const ItemListContainer = ({ Precio, Cantidad }) => {
  //console.log(props);
  return (
    <>
      <br />
      <div>Productos</div>
      <div>
        Algodon / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </div>
      <div>
        Gasa / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </div>
      <div>
        Jeringas / Precio $ {Precio} / Disponibilidad: {Cantidad}
      </div>
    </>
  );
};
