import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            👋 Hey, I am <b>Nguyen Minh Nghia </b> but you can call me <b>Doo</b>. A Frontend focused Web Developer
            building the Frontend of Websites that leads to the success of the overall product. My preferred tools are
            ReactJS.
          </p>
          <p>
            I'm on{" "}
            <a href="https://github.com/nghianm2803" target="_blank">
              Github
            </a>
            ,{" "}
            <a href="https://www.facebook.com/DooCharSiu/" target="_blank">
              Facebook
            </a>{" "}
            and{" "}
            <a href="https://www.instagram.com/doocharsiu/?hl=en" target="_blank">
              Instagram
            </a>
            .
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
