import * as React from "react";
import Button from "../../../components/Button/Button";

export default function Hero() {
    return(
        <section id="hero">
            <p className="mini-heading animate__animated animate__fadeIn animate__delay-1s">
            Hi, my name is
            </p>
            <h1 className="big-heading animate__animated animate__fadeIn animate__delay-1s">Èric Salat.</h1>
            <h2 className="big-heading animate__animated animate__fadeIn animate__delay-1s"> I build web applications.
            </h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
            I’m a Frontend Developer with experience in digital marketing.<br></br>
            I create applications from the beginning to the end: the business idea, the design, the development and the monetization.
            </p>
            <Button
            texto="Click to know me"
            className="know-me-button animate__animated animate__fadeInUp animate__delay-1s"
            href="#about"
            />
      </section>
    );
}