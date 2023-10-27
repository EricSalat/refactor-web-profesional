'use client'
import { useState } from 'react';
import About from './components/About/About';
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LeftAside from './components/Asides/LeftAside';
import MenuMobile from './components/Header/MenuMobile';
import NumberedHeading from './components/Numbered-Heading/Numbered-Heading';
import Project from "./components/Project/Project";
import RightAside from './components/Asides/RightAside';
import Trabajos from './components/Trabajos/Trabajos';

export default function Home() {

  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div>
      <LeftAside />
      <RightAside />
      { menuCollapse ? (
          <MenuMobile onClick={menuIconClick} />
          ) : (
          null
        )}
      <Header 
        about="Sobre mi"
        experience="Experiencia"
        works="Trabajos"
        next="Contacto" 
        onclick={menuIconClick} />

      <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Trabajos />
          </section>
          <section id="works">
            <NumberedHeading texto="Cosas que he programado"/>
            <div className="projects-section">
              <Project
                title="Hitmakers"
                description="Aplicación estilo Spotify de una productora de música para promocionar el álbum de la cantante Tessa Violet"
                tech="JavaScript"
                tech2="React"
                tech3="Vite"
                weblink="https://hitmakers.vercel.app/"
                githublink="https://github.com/EricSalat/music-promoter"
              />
              <Project
                title="Crypto stocks"
                description="Pantalla principal de una app de inversiones de criptomonedas. Ve el balance de tus stocks."
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                weblink="https://crypto-stocks-green.vercel.app/"
                githublink="https://github.com/EricSalat/kelisto-ejercicio-tecnico"
              />
              <Project
                title="Web profesional"
                description="Revisa el código de este mismo sitio, mi web profesional, hecha con HTML, CSS, JavaScript, React y Next.js."
                tech="JavaScript"
                tech2="React"
                tech3="Next.js"
                weblink="https://ericsalat.com"
                githublink="https://github.com/EricSalat/refactor-web-profesional"
              />
              <Project
                title="Web Arian International"
                description="Rediseño de UX/UI de la web corporativa. Implementación de diseño responsive y mejora del rendimiento."
                tech="HTML"
                tech2="CSS"
                tech3="Wordpress"
                weblink="https://arianinternational.eu/"
                githublink="https://arianinternational.eu/"
              />
            </div>
          </section>
          <section id="next">
            <p>04. ¿Ahora qué?</p>
            <p>Sigamos en contacto</p>
            <p>Si tienes alguna propuesta o consulta, no dudes en contactarme. ¡Te responderé lo más rápido posible!</p>
            <Button
              className="know-me-button"
              texto="Contacto" href="mailto:ericsalatb@gmail.com" />
          </section>
        </main>
        <Footer />
    </div>
  )
}
