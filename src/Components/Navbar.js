import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../dist/css/Navbar.css";
import logo from "./images/logo-light.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="leftlogo">
        <img src={logo} alt="LOGO"></img>

        <div className="menu-btn" onClick={handleClick}>
          <button>Menu</button>
        </div>
      </div>
      <div className={click ? "centerlinks active" : "centerlinks"}>
        <a href="/portfolio/#anchor-about" onClick={closeMobileMenu}>
          About
        </a>
        <a href="/portfolio/#anchor-technologies" onClick={closeMobileMenu}>
          Technologies
        </a>
        <a href="/portfolio/#anchor-works" onClick={closeMobileMenu}>
          Works
        </a>
        <a href="/portfolio/#anchor-contact" onClick={closeMobileMenu}>
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;
