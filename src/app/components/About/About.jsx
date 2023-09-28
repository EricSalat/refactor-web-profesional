import * as React from "react";
import NumberedHeading from "../Numbered-Heading/Numbered-Heading";
import Image from "next/image";
import FotoEric from "../../../../public/eric_salat.jpg";

export default function About() {
    return(
        <>
        <NumberedHeading texto="Sobre mi" />
              <div className="about-me">
                <div className="about-me-text">
                  <p>Hola! Me llamo Èric, vivo en Barcelona y me encanta crear cosas que vivan en Internet. Todo empezó en el año 2020 cuando me uní a un programa para que jóvenes aprendieran a crear aplicaciones móviles y emprendieran sus startups tecnológicas. Allí me metí de lleno a aprender desarrollo web.</p>
                  <p>En la universidad estudié comunicación y marketing, que combinados con mis conocimientos en programación, me permiten ser un perfil híbrido con una visión transversal de los proyectos. Por ello, enfoco el Front-end no solo al desarrollo, sino en la mejora de embudos de tráfico y la conversión de leads y ventas.</p>
                  <p>Estas son las tecnologías con las que he estado trabajando:</p>
                  <div>
                    <ul className="skills-list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>SASS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Figma</li>
                      <li>Adobe XD</li>
                      <li>Storybook</li>
                    </ul>
                  </div>
                </div>
                  <Image
                   src={FotoEric} height="300" width="300" alt="Retrato de Èric Salat" title="Retrato de Èric Salat" />
              </div>     
        </>
    );
}