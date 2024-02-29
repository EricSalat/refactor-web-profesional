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
import ProjectsLayout from './components/Project/ProjectsLayout';
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
            <ProjectsLayout />
          </section>
          <section id="next">
            <p>04. ¿Ahora qué?</p>
            <p>Sigamos en contacto</p>
            <p>Si tienes alguna propuesta o consulta, no dudes en contactarme. 
              <br></br>¡Te responderé lo más rápido posible!</p>
            <Button
              className="know-me-button"
              texto="Contacto" href="mailto:ericsalatb@gmail.com" />
          </section>
        </main>
        <Footer />
    </div>
  )
}
