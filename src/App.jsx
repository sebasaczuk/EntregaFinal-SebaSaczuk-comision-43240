import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/productList/ItemListContainer";

const App = () => {
  let Precio = "100";
  let Cantidad = "3";

  return (
    <div>
      <Navbar />
      <ItemListContainer Precio={Precio} Cantidad={Cantidad} />
    </div>
  );
};

export default App;
