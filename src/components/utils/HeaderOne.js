import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../pic/CC.png";

const HeaderOne = () => {
  const [now, setNow] = useState(true);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header className={colorChange ? "header now" : "header"}>
      <Link to={"/"} className="logo">
        <img src={logo} />
      </Link>

      <div className="fas fa-bars" onClick={() => setNow(!now)}>
        <i className="im im-menu"></i>
      </div>

      <nav
        className={now ? "navbar " : "navbar down"}
        onClick={() => setNow(!now)}
      >
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="nav_active">
              home
            </NavLink>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#service">services</a>
          </li>
          <li>
            <NavLink to="/pricing" activeClassName="nav_active">
              pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/">contact</NavLink>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderOne;
