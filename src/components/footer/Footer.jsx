import React from "react";
import "./footer.css";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        NghiaNM
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/DooCharSiu/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://gitlab.com/nghianm2803" target="_blank" rel="noreferrer">
          <AiFillGitlab />
        </a>
        <a href="https://github.com/nghianm2803" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nghianm2803/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; 2023 Handcrafted by{" "}
          <a href="https://github.com/nghianm2803" target="_blank" rel="noreferrer">
            NghiaNM
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
