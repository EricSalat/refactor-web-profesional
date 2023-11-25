'use client'
import Image from 'next/image'
import HeaderEN from './components/Header/HeaderEN';
import Hero from "./components/Hero/Hero";
import Button from "../components/Button/Button";
import NumberedHeading from '../components/Numbered-Heading/Numbered-Heading';
import FotoEric from "/public/eric_salat.jpg";
import Project from "../components/Project/Project";
import ProjectsLayoutEN from './components/ProjectsLayoutEN';
import Jobs from './components/Jobs';
import LeftAside from '../components/Asides/LeftAside';
import RightAside from '../components/Asides/RightAside';
import MenuMobileEN from './components/Header/MenuMobileEN';
import Footer from "../components/Footer/Footer";
import { useState } from 'react';

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
          <MenuMobileEN onClick={menuIconClick} />
          ) : (
          null
        )}
      <HeaderEN 
        onclick={menuIconClick} 
        about="About"
        experience="Experience"
        works="Works"
        next="Contact"
      />

      <main>
        <Hero />
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
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Figma</li>
                    <li>Adobe XD</li>
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
            <ProjectsLayoutEN />
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
