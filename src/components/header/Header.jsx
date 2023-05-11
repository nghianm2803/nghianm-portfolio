import React from "react";
import "./header.css";
import CTA from "./CTA";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Minh Nghia</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
