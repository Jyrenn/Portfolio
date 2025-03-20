import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="liens">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À Propos</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#parcours">Parcours</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
