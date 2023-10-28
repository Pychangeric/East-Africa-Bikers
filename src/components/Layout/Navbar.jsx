import { useState } from "react";
import "./Navbar.css";
import logoImage from "../../assets/images/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const navToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="nav">
      <a href="#" className="brand">
      <img src={logoImage} alt="Motorcycles Logo" />
      </a>
      <ul className={active ? "nav__menu nav__active" : "nav__menu"}>
        <li className="nav__item">
          <a href="/" className="nav__link-button">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/About" className="nav__link-button">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Onsale" className="nav__link-button">
            Onsale
          </a>
        </li>
        <li className="nav__item">
          <a href="/Cart" className="nav__link-button">
            Cart
          </a>
        </li>
        <li className="nav__item">
          <a href="/Contact" className="nav__link-button">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon ? "nav__toggler toggle" : "nav__toggler"}>
        <div className="line1">
          <div className="line2">
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;