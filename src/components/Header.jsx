import { Link, NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>Movies</Link>
        </div>

        <ul className="links">
          <li>
            <NavLink className={"add-btn"} to={"/"}>
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
