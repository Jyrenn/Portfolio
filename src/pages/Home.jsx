import Profil from "../components/Profil";
import LogoAnimate from "../components/LogoAnimate";
import ProfilImage from "../components/ProfilImage";
import Bouton from "../components/Bouton";
import image from "../assets/Logo.webp";
import imageProfil from "../assets/Profil.webp";
import ProjectList from "../components/ProjectList";
import About from "../components/About";
import Skills from "../components/Skills";
import Parcours from "../components/Parcours";
import { motion } from "framer-motion";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div id="accueil" className="Base">
        <div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Slide depuis la gauche/droite
            whileInView={{ opacity: 1, x: 0 }} // Apparaît progressivement
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Se déclenche au 20% de visibilité
          >
            <Profil titre="Clément Martin" sousTitre="Développeur Web" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }} // Slide depuis la gauche/droite
            whileInView={{ opacity: 1, x: 0 }} // Apparaît progressivement
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Se déclenche au 20% de visibilité
          >
            <div className="boutons-container">
              <Bouton texte="Github" lien="https://github.com/Jyrenn" />
              <Bouton texte="Artstation" lien="https://jyrenn.artstation.com" />
              <Bouton
                texte="itch.io"
                lien="https://jyrenn.itch.io/time-out-demo"
              />
              <Bouton
                texte="Linkedin"
                lien="https://www.linkedin.com/in/clément-martin-933740143/"
              />
              <Bouton texte="CV" lien="/CV_ClementMartin.pdf" />
            </div>
          </motion.div>
        </div>
        <LogoAnimate image={image} />
        <motion.div
          initial={{ opacity: 0, x: -200 }} // Slide depuis la gauche/droite
          whileInView={{ opacity: 1, x: 0 }} // Apparaît progressivement
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Se déclenche au 20% de visibilité
        >
          <ProfilImage image={imageProfil} />
        </motion.div>
      </div>
      <div id="apropos">
        <About
          texte="Disposant d’un Bachelor en Réalisation 3D, j’ai développé de solides compétences en modélisation et animation. 
        Passionné par la création numérique, j’ai ensuite approfondi mes connaissances en développement de jeux vidéo en autodidacte.
        Souhaitant me réorienter vers le développement Web, je termine actuellement une première formation chez OpenClassrooms. 
        Je suis donc à la recherche d’une entreprise où effectuer mon alternance afin de continuer à apprendre et à évoluer dans ce domaine."
        />
      </div>
      <h1 className="titre-projets" id="projets">
        Projets
      </h1>
      <ProjectList />
      <div id="competences">
        <Skills />
      </div>
      <div id="parcours">
        <Parcours />
      </div>
    </div>
  );
}
