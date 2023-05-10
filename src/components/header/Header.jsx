import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA";

export const Header = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nghia</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        {showScroll && (
          <a href="#" className="scroll__top-btn" onClick={scrollTop}>
            Scroll Top
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
