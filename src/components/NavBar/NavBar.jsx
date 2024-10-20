import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import css from "./NavBar.module.css";
import clsx from "clsx";
import { Authorization } from "../Authorization/Authorization";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.linkText}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        LearnLingo
      </Link>
      <div className={css.navlinks}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={buildLinkClass}>
          Teachers
        </NavLink>
        {/*         <NavLink to="/favourite" className={buildLinkClass}>
          Favourite
        </NavLink> */}
      </div>
      <div className={css.artista}>
        <Authorization />
      </div>
    </nav>
  );
};

export default NavBar;
