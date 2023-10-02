import logo from "../images/LOGO.png";
import "../css/style.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="global">
      <header>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <NavLink className="menuel" activeClassName="active" to="/">
            Accueil
          </NavLink>
          <NavLink className="menuel" activeClassName="active" to="/a-propos">
            A Propos
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
