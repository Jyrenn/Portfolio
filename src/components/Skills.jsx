import React, { useState } from "react";
import "../styles/Skills.css";
import devData from "../Data/SkillsDev.json";
import artistData from "../Data/Skills3D.json";

const Skills = () => {
  const [currentData, setCurrentData] = useState(devData);
  const [activeCategory, setActiveCategory] = useState("dev"); // Nouvel état

  const handleDevClick = () => {
    setCurrentData(devData);
    setActiveCategory("dev");
  };

  const handleArtistClick = () => {
    setCurrentData(artistData);
    setActiveCategory("artist");
  };

  return (
    <div className="Skills">
      <h1 className="titre-skills">Compétences</h1>
      <div className="skill-buttons">
        <button
          onClick={handleDevClick}
          className={activeCategory === "dev" ? "active" : ""}
        >
          Dev Web
        </button>
        <button
          onClick={handleArtistClick}
          className={activeCategory === "artist" ? "active" : ""}
        >
          Artiste 3D
        </button>
      </div>
      <div className="skill-container">
        {currentData.map((category) => (
          <div key={category.id} className="content">
            <h2>{category.title}</h2>
            <ul className="skills-list">
              {category.skills.map((skill) => (
                <li key={skill.id} className="skill-item">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
