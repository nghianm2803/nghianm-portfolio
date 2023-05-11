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
        <h3>Hello I'm</h3>
        <h1>Minh Nghia</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        {/* {showScroll && (
          <a href="#" className="scroll__top-btn" onClick={scrollTop}>
            Scroll Top
          </a>
        )} */}
      </div>
    </header>
  );
};

export default Header;
