import React from "react";
import "../styles/ProfilImage.css";

const ProfilImage = ({ image }) => {
  return (
    <div className="ProfilImage">
      <img className="ProfilImageimg" src={image} alt="Logo anime" />
    </div>
  );
};
export default ProfilImage;
