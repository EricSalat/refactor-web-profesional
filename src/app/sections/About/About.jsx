import * as React from "react";
import FotoEric from "../../../../public/eric_salat.jpg";
import Image from "next/image";
import NumberedHeading from "../../components/Numbered-Heading/Numbered-Heading";
import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('ABOUT');

    return(
        < div className="animate__animated animate__fadeIn animate__delay-1s">
        <NumberedHeading texto={t('title')} />
              <div className="about-me">
                <div className="about-me-text">
                  <p>{t('description1')}</p>
                  <p>{t('description2')}</p>
                  <p>{t('description3')}</p>
                  <div>
                    <ul className="skills-list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>Tailwind</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Astro</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
                  <Image
                   src={FotoEric} height="300" width="300" alt={t('image_alt')} title={t('image_alt')} />
              </div>     
        </div>
    );
}