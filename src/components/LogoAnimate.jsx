import React from "react";
import "../styles/LogoAnimate.css";

const LogoAnimate = ({ image }) => {
  return (
    <div className="LogoAnimate">
      <img className="LogoAnimateImg" src={image} alt="Logo anime" />
    </div>
  );
};
export default LogoAnimate;
