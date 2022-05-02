import React from "react";
import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <header>
      <div className={`${style.brand}`}>
        <h1>
          G<span>J</span>
        </h1>
      </div>
      <nav className="navbar">
        <ul className={`${style.menu}`}>
          <li className="active menu_item" data-url="home">
            <a href="#home">Home</a>
          </li>
          <li className="menu_item" data-url="about">
            <a href="#about">About me</a>
          </li>
          <li className="menu_item" data-url="portfolio">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="menu_item" data-url="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
