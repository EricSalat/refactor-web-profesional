'use client'
import * as React from "react";
import TabButton from '../../components/TabButton/TabButton';
import FichaTrabajo from './FichaTrabajo/FichaTrabajo';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';
import { useState } from "react";
import { useTranslations } from 'next-intl';



export default function Trabajos(props) {

  const [activeTab, setActiveTab] = useState("digitalResponse");
  const t = useTranslations('JOBS');

  const tabData = [
    {
      id: "digitalResponse",
      text: "Digital Response",
      component: (
        <FichaTrabajo
          id="digital-description"
          role={t("digital_response_role")}
          href="https://www.digitalresponse.es/"
          company="Digital Response"
          period={t("digital_response_period")}
          duty1={t("digital_response_duty1")}
          duty2={t("digital_response_duty2")}
          duty3={t("digital_response_duty3")}
          duty4={t("digital_response_duty4")}
        />
      ),
    },
    {
      id: "arian",
      text: "Arian International",
      component: (
        <FichaTrabajo
          id="arian-description"
          role={t("arian_role")}
          period={t("arian_period")}
          company="Arian International Projects"
          href="https://arianinternational.eu/"
          duty1={t("arian_duty1")}
          duty2={t("arian_duty2")}
          duty3={t("arian_duty3")}
          duty4={t("arian_duty4")}
        />
      ),
    },
    {
      id: "poliedric",
      text: "Polièdric",
      component: (
        <FichaTrabajo
            id="poliedric-description"
            role={t("poliedric_role")}
            company="Polièdric"
            href="https://poliedric.com/"
            period={t("poliedric_period")}
            duty1={t("poliedric_duty1")}
            duty2={t("poliedric_duty2")}
            duty3={t("poliedric_duty3")}
            duty4={t("poliedric_duty4")}
            />
        )
    },
    {
      id: "ainkaa",
      text: "Ainkaa",
      component: (
        <FichaTrabajo
          id="ainkaa-description"
          role={t("ainkaa_role")}
          company="Ainkaa"
          period={t("ainkaa_period")}
          duty1={t("ainkaa_duty1")}
          duty2={t("ainkaa_duty2")}
          duty3={t("ainkaa_duty3")}
          duty4={t("ainkaa_duty4")}
          />
      )
    },
    {
      id: "adiplus",
      text: "Adiplus Tech & Content",
      component: (
      <FichaTrabajo
          id="adiplus-description"
          role={t("adiplus_role")}          href="https://www.linkedin.com/company/adiplus-techandcontent/"
          company="Adiplus Tech & Content"
          period={t("adiplus_period")} 
          duty1={t("adiplus_duty1")} 
          duty2={t("adiplus_duty2")} 
          duty3={t("adiplus_duty3")} 
          duty4={t("adiplus_duty4")} 
        />
      )
    },
    {
      id: "diariAra",
      text: "Diari Ara",
      component: (
        <FichaTrabajo
          id="diariara-description"
          role={t("diari_ara_role")} 
          href="https://www.ara.cat/"
          company="Diari Ara"
          period={t("diari_ara_period")} 
          duty1={t("diari_ara_duty1")} 
          duty2={t("diari_ara_duty2")} 
          duty3={t("diari_ara_duty3")} 
          duty4={t("diari_ara_duty4")} 
        />
      )
    }
  ];
  
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
    <NumberedHeading texto="Donde he trabajado" />
      <div className="jobs animate__animated animate__fadeIn animate__delay-1s">
        <div className="jobs-slider animate__animated animate__fadeIn animate__delay-1s">
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
  </div>
  );
}

