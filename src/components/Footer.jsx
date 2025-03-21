import React from "react";
import "../styles/Footer.css";
import Bouton from "../components/Bouton";

const Footer = () => {
  return (
    <footer>
      <div className="boutons-container boutons-footer">
        <Bouton texte="Github" lien="https://github.com/Jyrenn" />
        <Bouton texte="Artstation" lien="https://jyrenn.artstation.com" />
        <Bouton texte="itch.io" lien="https://jyrenn.itch.io/time-out-demo" />
        <Bouton texte="CV" lien="/CV_ClementMartin.pdf" />
      </div>
      <p className="mentions">Clément Martin © Mentions légales</p>
    </footer>
  );
};

export default Footer;
