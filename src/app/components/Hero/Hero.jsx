import * as React from "react";
import Button from "../Button/Button";

export default function Hero() {
    return(
        <section id="hero">
            <p className="mini-heading animate__animated animate__fadeIn animate__delay-1s">
                Hola, me llamo 
            </p>
            <h1 className="big-heading animate__animated animate__fadeIn animate__delay-1s">Èric Salat.</h1>
            <h2 className="big-heading animate__animated animate__fadeIn animate__delay-1s"> Y programo aplicaciones web.
            </h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
            Soy <span lang="en">Frontend Developer</span> con experiencia en marketing digital y me dedico a crear aplicaciones desde el principio hasta el final: empezando por la concepción de la idea de negocio, pasando por el desarrollo, hasta llegar a la monetización.
            </p>
            <Button
                texto="Haz clic para conocerme"
                className="know-me-button animate__animated animate__fadeInUp animate__delay-1s"
                href="#about"
            />
        </section>
    );
}