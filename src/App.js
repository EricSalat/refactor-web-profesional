import './App.css';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import NumberedHeading from './components/Numbered-Heading/Numbered-Heading';
import FotoEric from "./assets/eric_salat.jpg";
import Project from "./components/Project/Project";
import Trabajos from './components/Trabajos/Trabajos';
import LeftAside from './components/Asides/LeftAside';
import RightAside from './components/Asides/RightAside';
import MenuMobile from './components/Header/MenuMobile';
import { SlSocialLinkedin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";


function App() {

  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="App">
      <LeftAside />
      <RightAside />
      { menuCollapse ? (
        <MenuMobile onClick={menuIconClick} />
        ) : (
        null
        )}
      <Header onclick={menuIconClick} />
      <main>
        <section id="hero">
          <p className="mini-heading">Hola, me llamo</p>
          <h1 className="big-heading">Èric Salat.</h1>
          <h2 className="big-heading">Y programo aplicaciones web.</h2>
          <p>Soy Front-end Developer con experiencia en marketing digital y me dedico a crear aplicaciones desde el principio hasta el final: empezando por la concepción de la idea de negocio, pasando por el desarrollo, hasta llegar a la monetización.</p>
          <Button
            texto="Haz clic para conocerme"
            className="know-me-button"
            href="#about"
          />
        </section>
        <section id="about">
          <NumberedHeading texto="Sobre mi" />
          <div className="about-me">
            <div className="about-me-text">
              <p>¡Hola! Me llamo Èric, vivo en Barcelona y me encanta crear cosas que vivan en Internet. Todo empezó en el año 2020 cuando me uní a un programa para que jóvenes aprendieran a crear aplicaciones móviles y emprendieran sus startups tecnológicas. Allí me metí de lleno a aprender desarrollo web.</p>
              <p>En la universidad estudié comunicación y marketing, que combinados con mis conocimientos en programación, me permiten ser un perfil híbrido con una visión transversal de los proyectos. Por ello, enfoco el Front-end no solo al desarrollo, sino en la mejora de embudos de tráfico y la conversión de leads y ventas.</p>
              <p>Estas son las tecnologías con las que he estado trabajando:</p>
              <div>
                <ul className="skills-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>SASS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>PHP</li>
                  <li>Google Ads</li>
                  <li>Google Analytics</li>
                  <li>Amazon Ads</li>

                </ul>
              </div>
            </div>
            <div>
              <img src={FotoEric} height="300" width="300"></img>
            </div>
          </div>
        </section>
        <section id="experience">

          <Trabajos />

        </section>
        <section id="works">
          <NumberedHeading texto="Cosas que he programado" />
          <div className="projects-section">
            <Project
              title="Web profesional"
              description="Revisa el código de este mismo sitio, mi web profesional, hecha con HTML, CSS, JavaScript y React"   
              tech="HTML"
              tech2="CSS"
              tech3="JavaScript"
              tech4="React"
              githublink="https://github.com/EricSalat/web-profesional"
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
            <Project
              title="Calculadora"
              description="Una calculadora para el móvil que permite sumar, restar, multiplicar y dividir. Hecha con JavaScript y React."
              tech="HTML"
              tech2="CSS"
              tech3="JavaScript"
              tech4="React"
              weblink="http://ericsalat.com/calculadora/"
              githublink="https://github.com/EricSalat/calculadora"
            />
            <Project
              title="Reserva entradas de cine"
              description="Una app para comprar entradas de cine. Selecciona la película, los asientos y la cantidad de tickets. Hay descuentos entre semana."
              tech="HTML"
              tech2="CSS"
              tech3="JavaScript"
              tech4="React"
              githublink="https://github.com/EricSalat/Selector-Asientos"
            />
            {/* <Project
              title="Lista de tareas"
              description="Una app para apuntar y gestionar tus tareas: anota, tacha y elimina lo que hayas completado. Hecha con JavaScript y React."
              tech="JavaScript"
              tech2="React"
              weblink="http://ericsalat.com/tareas/"
              githublink="https://github.com/EricSalat/aplicacion-tareas"
            /> */}
          </div>

        </section>
        <section id="next">
          <p>04. ¿Ahora qué?</p>
          <p>Sigamos en contacto</p>
          <p>Actualmente estoy buscando nuevas oportunidades laborales. Si tienes alguna propuesta o consulta, no dudes en contactarme. ¡Te responderé lo más rápido posible!</p>
          <Button
            className="know-me-button"
            texto="Contacto" href="mailto:ericsalatb@gmail.com" />
        </section>

      </main>
      <footer className="developed-by">
        <ul>
          <li>
            <a href="https://github.com/EricSalat" target="_blank">
              <RiGithubLine
                size="22"
                style={{}}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eric-salat/" target="_blank">
              <SlSocialLinkedin
                size="20"
              />
            </a>
          </li>
          <li>
            <a href="mailto:ericsalatb@gmail.com" target="_blank">
              <HiOutlineMail
                size="22"
              />
            </a>
          </li>
        </ul>
        <p>Desarrollado con ❤️ por <a href="https://www.linkedin.com/in/eric-salat/" target="_blank">Èric Salat</a></p>
      </footer>
    </div>
  );
}

export default App;
