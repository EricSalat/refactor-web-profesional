import * as React from "react";
import { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import JobsCard from './JobsCard';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';



export default function Jobs(props) {

  const [digitalResponse, setDigitalResponse] = useState(true)
  const [arian, setArian] = useState(false);
  const [poliedric, setPoliedric] = useState(false);
  const [ainkaa, setAinkaa] = useState(false);
  const [adiplus, setAdiplus] = useState(false);
  const [diariAra, setDiariAra] = useState(false);

  const [digitalResponseTab, setDigitalResponseTab] = useState(true)
  const [arianTab, setArianTab] = useState(false);
  const [poliedricTab, setPoliedricTab] = useState(false);
  const [ainkaaTab, setAinkaaTab] = useState(false);
  const [adiPlusTab, setAdiPlusTab] = useState(false);
  const [diariAraTab, setDiariAraTab] = useState(false);
  
  return (
    <>
      <NumberedHeading texto="Donde he trabajado" />
      <div className="jobs">
        <div className="jobs-slider">
    
              <TabButton
              text="Digital Response"
              class={digitalResponseTab ? "tab-button-active" : "tab-button-inactive"}
              id="digital"
              onclick={() => {
                setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(true);
                setArianTab(false);
                setPoliedricTab(false);
                setAinkaaTab(false);
                setAdiPlusTab(false);
                setDiariAraTab(false);
                setDigitalResponseTab(true);
              }}
              />

          <TabButton
            text="Arian International"
            id="arian"
            class={arianTab ? "tab-button-active" : "tab-button-inactive"}
            onclick={() => {
              setArian(true); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(true);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }}
          />
          <TabButton
            text="Polièdric"
            class={poliedricTab ? "tab-button-active" : "tab-button-inactive"}
            id="poliedric"
            onclick={() => {
              setArian(false); setPoliedric(true); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(true);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);

            }}
          />
          <TabButton text="Ainkaa"
            class={ainkaaTab ? "tab-button-active" : "tab-button-inactive"}
            id="ainkaa"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(true); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(true);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }} />
          <TabButton
            text="Adiplus Tech & Content"
            class={adiPlusTab ? "tab-button-active" : "tab-button-inactive"}
            id="adiplus"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(true); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(true);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }}
          />
          <TabButton
            text="Diari Ara"
            class={diariAraTab ? "tab-button-active" : "tab-button-inactive"}
            id="diariara"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(true); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(true);
              setDigitalResponseTab(false);
            }}
          />
        </div>

        {digitalResponse ? (
          <JobsCard
          id="digital-description"
          role="Frontend and Email Developer"
          href="https://www.digitalresponse.es/"
          company="Digital Response"
          period="January 2023 - Present"
          duty1="Implemented email campaign layouts using HTML, CSS, and JavaScript for CaixaBank."
          duty2="Developed responsive programming to ensure proper display across various email clients. Conducted testing with Email on Acid."
          duty3="Executed pixel-perfect and detailed designs based on mockups provided in Figma and Adobe XD."
          duty4="Published and monitored Customer Journey campaigns using Adobe Campaigns."
          />
          ) : (
            null
            )}

        {arian ? (
          <JobsCard
            id="arian-description"
            role="Frontend Developer"
            period="July - October 2022"
            company="Arian International Projects"
            href="https://arianinternational.eu/"
            duty1="Developed websites using HTML, CSS, and JavaScript, ensuring high-quality code and functionality"
            duty2="Implemented responsive design techniques to optimize website display across various devices and screen sizes."
            duty3="Optimized website loading time, improving user experience (UX)and user interface (UI)."
            duty4="Integrated measurement tools to track and analyze data for digital marketing campaigns."
            />
            ) : (
              null
              )}

        {poliedric ? (
          <JobsCard
          id="poliedric-description"
          role="Search Engine Marketing (SEM) Specialist"
          company="Polièdric"
          href="https://poliedric.com/"
          period="June 2021 - March 2022"
          duty1="Managed pay-per-click advertising campaigns including the strategy, design, implementation, measuring and analysis of ad performance in Google Ads, Facebook Ads, Amazon Ads."
          duty2="Invested +10.000€ monthly in campaigns and increased ROI +300% in different client businesses."
          duty3="Met customers regularly to analyze results and redefine marketing strategies."
          duty4="Audit customers webpages SEO and designed strategies to improve it."
          />
          ) : (
            null
            )}


        {ainkaa ? (
          <JobsCard
          id="ainkaa-description"
          role="Frontend Developer & Project Manager"
            company="Ainkaa"
            period="March 2021 - Present"
            duty1="Start-up creation program for young people to create a viable mobile app. Includes:"
            duty2="Coded with HTML, CSS, Javascript and React. Designed UI and UX experience. Prototyped with Figma."
            duty3="Created business and viability plans. Maked marketing plan and benchmarking."
            duty4="Elevator pitch and MVP presentation for financing search."
            />
            ) : (
              null
              )}

        {adiplus ? (
          <JobsCard
          id="adiplus-description"
          role="Journalist"
          href="https://www.linkedin.com/company/adiplus-techandcontent/"
          company="Adiplus Tech & Content"
          period="October 2019 - June 2020"
          duty1="Wrote news, interviews and reports in Spanish for Pan&Pizza, a newspage about the bakery and restaurant sector."
          duty2="Compose news and reports at Newspa, the magazine of Bakers Guild of the Province of Barcelona."
          duty3="Wrote hot news about technology and insurances at TiempoSeguro, a newspage about the insurance sector dedicated to customers."
          duty4="Designed and implemented SEO strategies and email marketing campaigns."
          />
          ) : (
            null
            )}

        {diariAra ? (
          <JobsCard
          id="diariara-description"
          role="Jorunalist"
          href="https://www.ara.cat/"
          company="Diari Ara"
          period="September 2018 - May 2019"
          duty1="Staff Writer internship. Wrote news, articles,interviews and another contents for the culture section about music, literature, cinema, theater and visual arts."
          duty2="Covered hot news."
          duty3="Attended at press conferences."
          duty4="Cooperated evetually with other sections."
          />
          ) : (
            null
            )}

        
      </div>
    </>
  );
}

