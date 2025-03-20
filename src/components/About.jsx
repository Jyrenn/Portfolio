import React from "react";
import "../styles/About.css";

const About = ({ texte }) => {
  return (
    <div className="About">
      <h2>A propos</h2>
      <p>{texte}</p>
    </div>
  );
};
export default About;
