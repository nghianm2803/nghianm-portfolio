import React from "react";
import "./experience.css";
import { ReactIcon, TsIcon, HtmlIcon, CssIcon, JsIcon } from "./Stack";

const Experience = () => {
  return (
    <section id="experience">
      <h3>What Skills I Have</h3>
      <h1>My Experience</h1>
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
