'use client'
import Image from 'next/image'
import { useState } from 'react';
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import NumberedHeading from '../components/Numbered-Heading/Numbered-Heading';
import FotoEric from "/public/eric_salat.jpg";
import Project from "../components/Project/Project";
import Jobs from './components/Jobs';
import LeftAside from '../components/Asides/LeftAside';
import RightAside from '../components/Asides/RightAside';
import MenuMobile from '../components/Header/MenuMobile';
import Footer from "../components/Footer/Footer";

export default function HomeEnglish() {

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
        onclick={menuIconClick} 
        about="About"
        experience="Experience"
        works="Works"
        next="Contact"
      />

      <main>
          <section id="hero">
            <p className="mini-heading animate__animated animate__fadeIn animate__delay-1s">
            Hi, my name is
            </p>
            <h1 className="big-heading animate__animated animate__fadeIn animate__delay-1s">Èric Salat.</h1>
            <h2 className="big-heading animate__animated animate__fadeIn animate__delay-1s"> I build web applications.
            </h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
            I’m a Front-end Developer with experience in digital marketing.<br></br>
            I create applications from the beginning to the end: the business idea, the design, the development and the monetization.
            </p>
            <Button
              texto="Click to know me"
              className="know-me-button animate__animated animate__fadeInUp animate__delay-1s"
              href="#about"
            />
          </section>
          <section id="about">
            <NumberedHeading texto="About Me" />
            <div className="about-me">
              <div className="about-me-text">
                <p>Hi! My name is Èric, I live in Barcelona and I enjoy creating things that live on the internet. Everything started in 2020 when I enrolled in a program for young people to learn how to make mobile apps and found tech start ups. There I started seriously in software development.</p>
                <p>I am a hybrid profile. I studied marketing and communication in the University and I combine this knowledge with my coding skills to improve the development and have a global vision of the projects. Therefore, I focus my websites to improve the conversion rate of leads and sales.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
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
                <Image
                 src={FotoEric} height="300" width="300" alt="Èric Salat portrait" title="Èric Salat portrait" />
            </div>
          </section>
          <section id="experience">
            <Jobs />
          </section>
          <section id="works">
            <NumberedHeading texto="Some Things I’ve Built"/>
            <div className="projects-section">
              <Project
                title="Crypto stocks"
                description="Main screen of a cryptocurrency investment app. See the balance of your stocks."
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                weblink="https://www.ericsalat.com/kelisto/"
                githublink="https://github.com/EricSalat/kelisto-ejercicio-tecnico"
              />
              <Project
                title="Professional website"
                description="Check the code of this site, my professional web, made with HTML, CSS, JavaScript and React."
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="Next.js"
                githublink="https://github.com/EricSalat/web-profesional"
              />
              <Project
                title="Arian International"
                description="UX/UI redesign of the cooperative website. Implemented responsive design and improved performance."
                tech="HTML"
                tech2="CSS"
                tech3="Wordpress"
                tech4="PHP"
                weblink="https://arianinternational.eu/"
                githublink="https://arianinternational.eu/"
              />
              <Project
                title="Calculator"
                description="A basic calculator for your phone. You can do addition, subtraction, multiplication and division. Made with JavaScript and React."
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                weblink="http://ericsalat.com/calculadora/"
                githublink="https://github.com/EricSalat/calculadora"
              />
              <Project
                title="Book cinema tickets"
                description="An app to buy cinema tickets. Select the movie, the seats and the amount of tickets. There are discounts during the weekdays."
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                githublink="https://github.com/EricSalat/Selector-Asientos"
              />
            </div>
          </section>
          <section id="next">
            <p>04. What’s Next?</p>
            <p>Get In Touch</p>
            <p>I’m currently looking for new job opportunities. If you have some offer or question, my inbox is always open. I’ll try my best to get back to you!</p>
            <Button
              className="know-me-button"
              texto="Contact me" href="mailto:ericsalatb@gmail.com" />
          </section>
        </main>
        <Footer />
    </div>
  )
}
