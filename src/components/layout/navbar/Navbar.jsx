import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <ul>
        <li>Institucional</li>
        <li>Historia</li>
        <li>Contactos</li>
      </ul>
      <div>
        <BsCart3 color="red" size="35px" />
        <span>1</span>
      </div>
    </div>
  );
};

export default Navbar;
