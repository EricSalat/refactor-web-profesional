'use client'
import { useState } from 'react';
import {useTranslations} from 'next-intl';
import About from '../components/About/About';
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import LeftAside from '../components/Asides/LeftAside';
import MenuMobile from '../components/Header/MenuMobile';
import NumberedHeading from '../components/Numbered-Heading/Numbered-Heading';
import ProjectsLayout from '../components/Project/ProjectsLayout';
import RightAside from '../components/Asides/RightAside';
import Trabajos from '../components/Trabajos/Trabajos';
import Contact from '../components/Contact/Contact';

export default function Home() {
  const t = useTranslations('HOME');

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
            <NumberedHeading texto={t('works-header')}/>
            <ProjectsLayout />
          </section>
          <Contact />
        </main>
        <Footer />
    </div>
  )
}
