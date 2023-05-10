import React from "react";
import "./experience.css";
import { ReactIcon, TsIcon, HtmlIcon, CssIcon, JsIcon } from "./Stack";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="experience__content">
        <ReactIcon />
        <TsIcon />
        <HtmlIcon />
        <CssIcon />
        <JsIcon />
      </div>
    </section>
  );
};

export default Experience;
