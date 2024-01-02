import { NavLink } from "react-router-dom";

import "../../styles/header.scss";

const Header = () => {
  return (
    <div className="navbar-container">
      <NavLink className="logo" to="/home">
        <div className="nav-item">LOGO</div>
      </NavLink>

      <NavLink to="/game">
        <div className="nav-item">Game</div>
      </NavLink>

      <NavLink to="/about">
        <div className="nav-item">About</div>
      </NavLink>
    </div>
  );
};
export default Header;
