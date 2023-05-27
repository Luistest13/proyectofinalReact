import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="Titulo">Equipos Gaming</h3>
      </Link>
      <div className="Categoria">
        <NavLink
          to="/category/PC"
          className={({ isActive }) => (isActive ? "Active" : "Option")}
        >
          <Button variant="primary" size="lg" active>
            PC
          </Button>
        </NavLink>
        <NavLink
          to="/category/Notebook"
          className={({ isActive }) => (isActive ? "Active" : "Option")}
        >
          <Button variant="primary" size="lg" active>
            Notebook
          </Button>
        </NavLink>
        <NavLink
          to="/category/Tablet"
          className={({ isActive }) => (isActive ? "Active" : "Option")}
        >
          <Button variant="primary" size="lg" active>
            Tablet
          </Button>
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
