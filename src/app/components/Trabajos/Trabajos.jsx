'use client'
import * as React from "react";
import { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import FichaTrabajo from './FichaTrabajo/FichaTrabajo';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';



export default function Trabajos(props) {

  const [activeTab, setActiveTab] = useState("digitalResponse");

  const tabData = [
    {
      id: "digitalResponse",
      text: "Digital Response",
      component: (
        <FichaTrabajo
          id="digital-description"
          role="Frontend and Email Developer"
          href="https://www.digitalresponse.es/"
          company="Digital Response"
          period="Enero 2023 - Actualidad"
          duty1="Implementé diseños de campañas de correo electrónico utilizando HTML, CSS y JavaScript para CaixaBank."
          duty2="Desarrollé programación responsiva para asegurar una visualización adecuada en diferentes clientes de correo electrónico. Realicé pruebas con Email on Acid."
          duty3="Ejecuté diseños detallados y precisos basados en bocetos proporcionados en Figma y Adobe XD."
          duty4="Publiqué y monitoreé campañas del Customer Journey utilizando Adobe Campaigns."
        />
      ),
    },
    {
      id: "arian",
      text: "Arian International",
      component: (
        <FichaTrabajo
          id="arian-description"
          role="Frontend Developer"
          period="Julio - Octubre 2022"
          company="Arian International Projects"
          href="https://arianinternational.eu/"
          duty1="Desarrollé sitios web utilizando HTML, CSS y JavaScript, asegurando un código de alta calidad y funcionalidad."
          duty2="Implementé técnicas de diseño responsivo para optimizar la visualización del sitio web en diferentes dispositivos y tamaños de pantalla."
          duty3="Optimicé el tiempo de carga del sitio web, mejorando la experiencia del usuario (UX) y la interfaz de usuario (UI)."
          duty4="Integré herramientas de medición para rastrear y analizar datos de campañas de marketing digital."
        />
      ),
    },
    {
      id: "poliedric",
      text: "Polièdric",
      component: (
        <FichaTrabajo
            id="poliedric-description"
            role="Gestor de campañas SEM & PPC"
            company="Polièdric"
            href="https://poliedric.com/"
            period="Junio 2021 - Marzo 2022"
            duty1="Gestión de campañas publicitarias de pago por clic. Elaboración de la estrategia, diseño implementación, medición y análisis de la performance de los anuncios en Google Ads, Facebook Ads, Amazon Ads y Linkedin Ads."
            duty2="Invertí +10.000€ mensuales en campañas y aumenté el ROI en más del 300% en los negocios de diferentes clientes."
            duty3="Reuniones frecuentes con clientes para analizar los resultados y redefinir las estrategias de márqueting."
            duty4="Auditorías SEO de páginas web y diseño de estrategias para mejorar el posicionamiento."
            />
        )
    },
    {
      id: "ainkaa",
      text: "Ainkaa",
      component: (
        <FichaTrabajo
          id="ainkaa-description"
          role="Desarrollador de Front-end & Project Manager"
          company="Ainkaa"
          period="Marzo 2021 - Actualidad"
          duty1="Programa de creación de start-ups dirigido a jóvenes para crear una app móvil viable donde se realizó:"
          duty2="Programación en HTML, CSS, Javascript y React. Diseño UX UI. Diseño de prototipos con Figma."
          duty3="Creación de planes de empresa, de negocio y viabilidad. Realización de plan de marketing e investigación de mercados."
          duty4="Elevator pitch y presentación de PMV para la búsqueda de financiación."
          />
      )
    },
    {
      id: "adiplus",
      text: "Adiplus Tech & Content",
      component: (
      <FichaTrabajo
          id="adiplus-description"
          role="Periodista"
          href="https://www.linkedin.com/company/adiplus-techandcontent/"
          company="Adiplus Tech & Content"
          period="Octubre 2019 - Junio 2020"
          duty1="Redacción y edición de noticias y contenidos para el portal del sector gastronómico Pan&Pizza."
          duty2="Redacción de artículos para la revista Newspa, el magazine del Gremio de Panaderos de la Provincia de Barcelona."
          duty3="Redacción de noticias y artículos sobre seguros en Tiempo Seguro."
          duty4="Diseño e implementación de estrategias de Posicionamiento SEO y campañas de email marketing."
        />
      )
    },
    {
      id: "diariAra",
      text: "Diari Ara",
      component: (
        <FichaTrabajo
          id="diariara-description"
          role="Periodista"
          href="https://www.ara.cat/"
          company="Diari Ara"
          period="Septiembre 2018 - Mayo 2019"
          duty1="Redactor en prácticas de noticias, reportajes, entrevistas y otros contenidos en la sección de cultura sobre temas de música, literatura, cine, teatro y artes visuales."
          duty2="Cobertura de la actualidad diaria."
          duty3="Asistencia a ruedas de prensa."
          duty4="Colaboración puntual con otras secciones."
        />
      )
    }
  ];
  
  return (
    <>
    <NumberedHeading texto="Donde he trabajado" />
    <div className="jobs">
      <div className="jobs-slider">
        {tabData.map((tab) => (
          <TabButton
            key={tab.id}
            text={tab.text}
            class={activeTab === tab.id ? "tab-button-active" : "tab-button-inactive"}
            id={tab.id}
            onclick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      {tabData.map((tab) =>
        tab.id === activeTab ? tab.component : null
      )}
    </div>
  </>
  );
}

