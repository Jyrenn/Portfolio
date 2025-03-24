import React from "react";
import { motion } from "framer-motion";
import "../styles/Parcours.css";
import data from "../Data/Parcours.json";

const Parcours = () => {
  return (
    <div className="parcours-container">
      <h1 className="titre-parcours">Parcours</h1>
      <div className="parcours">
        {data.map((project, index) => (
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
              className="parcours-image"
            />
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;
