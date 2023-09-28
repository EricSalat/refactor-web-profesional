import * as React from "react";
import { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import JobsCard from './JobsCard';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';



export default function Jobs(props) {

  const [activeTab, setActiveTab] = useState("digitalResponse");

  const tabData = [
    {
      id: "digitalResponse",
      text: "Digital Response",
      component: (
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
      ),
    },
    {
      id: "arian",
      text: "Arian International",
      component: (
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
      ),
    },
    {
      id: "poliedric",
      text: "Polièdric",
      component: (
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
      )
    },
    {
      id: "ainkaa",
      text: "Ainkaa",
      component: (
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
      )
    },
    {
      id: "adiplus",
      text: "Adiplus Tech & Content",
      component: (
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
      )
    },
    {
      id: "diariAra",
      text: "Diari Ara",
      component: (
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
      )
    }
  ]
  
  return (
    <>
      <NumberedHeading texto="Where I've worked" />
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

