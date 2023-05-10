import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaSpotify,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";
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
        <a href="https://www.facebook.com/DooCharSiu/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://m.me/doocharsiu" target="_blank">
          <FaFacebookMessenger />
        </a>
        <a href="https://open.spotify.com/user/313fgecrfragre6k4xxmcn42qo5u?si=36f538b841e14c50" target="_blank">
          <FaSpotify />
        </a>
        <a href="https://gitlab.com/nghianm2803" target="_blank">
          <AiFillGitlab />
        </a>
        <a href="https://github.com/nghianm2803" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nghianm2803/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://t.me/DooCharSiu" target="_blank">
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/doocharsiu/?hl=en" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; 2023 Handcrafted by{" "}
          <a href="https://github.com/nghianm2803" target="_blank">
            NghiaNM
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
