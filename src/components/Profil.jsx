import React from "react";
import "../styles/Profil.css";

const Profil = ({ titre, sousTitre }) => {
  return (
    <div className="Profil">
      <h1>{titre}</h1>
      <h2>{sousTitre}</h2>
    </div>
  );
};
export default Profil;
