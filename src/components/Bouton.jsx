import React from "react";
import "../styles/Bouton.css";

const Bouton = ({ texte, lien, site }) => {
  const isDownload = lien && lien.endsWith(".pdf");

  return (
    <div className="Bouton">
      {lien && (
        <a
          href={lien}
          target={isDownload ? "_self" : "_blank"}
          download={isDownload ? true : undefined}
          className="texte-lien"
        >
          {texte}
        </a>
      )}
      {site && (
        <a
          href={site}
          target={isDownload ? "_self" : "_blank"}
          download={isDownload ? true : undefined}
          className="texte-lien"
        >
          {texte}
        </a>
      )}
    </div>
  );
};

export default Bouton;
