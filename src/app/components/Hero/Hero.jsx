import * as React from "react";
import Button from "../Button/Button";
import "../Button/Button.css";
import {useTranslations} from 'next-intl';

export default function Hero() {
    const t = useTranslations('HERO');
    return(
        <section id="hero">
            <p className="mini-heading animate__animated animate__fadeIn animate__delay-1s">
                {t('welcome')} 
            </p>
            <h1 className="big-heading animate__animated animate__fadeIn animate__delay-1s">Èric Salat.</h1>
            <h2 className="big-heading animate__animated animate__fadeIn animate__delay-1s"> {t('subtitle')} 
            </h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
            {t('introduction')}<br></br> {t('introduction-afterbr')}
            </p>
            <Button
                texto={t('button')} 
                className="know-me-button animate__animated animate__fadeInUp animate__delay-1s"
                href="#about"
            />
        </section>
    );
}