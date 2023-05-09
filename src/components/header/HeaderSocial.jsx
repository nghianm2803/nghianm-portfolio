import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://gitlab.com/nghianm2803" target="_blank">
        <AiFillGitlab />
      </a>
      <a href="https://github.com/nghianm2803" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/nghianm2803" target="_blank">
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
