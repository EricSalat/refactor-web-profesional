'use client'
import { useState } from 'react';
import {useTranslations} from 'next-intl';
import About from '../sections/About/About';
import Button from "../components/Button/Button";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";
import LeftAside from '../sections/Asides/LeftAside';
import MenuMobile from '../sections/Header/MenuMobile';
import NumberedHeading from '../components/Numbered-Heading/Numbered-Heading';
import ProjectsLayout from '../sections/Project/ProjectsLayout';
import RightAside from '../sections/Asides/RightAside';
import Trabajos from '../sections/Trabajos/Trabajos';
import Contact from '../sections/Contact/Contact';

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
