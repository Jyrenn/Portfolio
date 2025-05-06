import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ProjectList.css";
import projetsDev from "../Data/ProjetsDev.json";
import projets3D from "../Data/Projets3D.json";
import Bouton from "../components/Bouton";

const ProjectList = () => {
  const [isDev, setIsDev] = useState(true); // État pour savoir quel type de projets afficher

  const handleToggle = () => {
    setIsDev((prev) => !prev); // On inverse l'état
  };

  const displayedProjects = isDev ? projetsDev : projets3D;

  return (
    <div className="projects-container">
      <div className="switch-buttons">
        <button
          className={isDev ? "active" : ""}
          onClick={() => setIsDev(true)}
        >
          Projets Dev Web
        </button>
        <button
          className={!isDev ? "active" : ""}
          onClick={() => setIsDev(false)}
        >
          Projets Artiste 3D
        </button>
      </div>

      <div className="projects">
        {displayedProjects.map((project, index) => (
          <motion.div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="projects-image"
            />
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {/* Ici on affiche les skills */}
              {project.skills && (
                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="trait"></div>
              <Bouton texte="source" lien={project.lien} />
              <Bouton texte="site" lien={project.site} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
