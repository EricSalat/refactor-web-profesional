'use client'
import * as React from "react";
import Image from 'next/image'
import "./Header.css";
import 'animate.css';
import Button from "@/app/components/Button/Button";
import logo from "../../../../../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import Link from "next/link";
// import { useEffect } from "react";



function HeaderEN(props) {

  // function ajustarEnlaceActual(url) {
  //   let enlace;
  
  //   if (url === "https://ericsalat.com") {
  //     enlace = url;
  //   } else {
  //     enlace = "https://ericsalat.com/en";
  //   }
  
  //   return enlace;
  // }
  /*
  useEffect( () => {
    // Obtener la URL actual
    const urlActual = window.location.href;
    
    // Definir los enlaces para ambos casos
    const enlaceWebPrincipal = "http://ericsalat.com";
    const enlaceOtroIdioma = "http://ericsalat.com/en";
    
    // Determinar cuál enlace utilizar según la URL actual
    const enlace = urlActual === enlaceWebPrincipal ? enlaceOtroIdioma : enlaceWebPrincipal;

    if (typeof window !== 'undefined') {
      // Obtener la URL actual
    const urlActual = window.location.href;
  
    // Definir los enlaces para ambos casos
    const enlaceWebPrincipal = "http://ericsalat.com";
    const enlaceOtroIdioma = "http://ericsalat.com/en";
  
    // Determinar cuál enlace utilizar según la URL actual
    const enlace = urlActual === enlaceWebPrincipal ? enlaceOtroIdioma : enlaceWebPrincipal;
    }

  }, []);
  */

  return (
    <header>
      <nav className="animate__animated animate__fadeInDown animate__delay-2s">
           <Link href="/en">
               <Image src={logo} height="40" width="40"  alt="" />
           </Link>
          <div className="contenedor-menu">
            <ol>
              <li><a href="#about">{props.about}</a></li>
              <li><a href="#experience">{props.experience}</a></li>
              <li><a href="#works">{props.works}</a></li>
              <li><a href="#next">{props.next}</a></li> 
              
              <Button
                texto="Currículum"
                href="/CV_ERIC_SALAT_2023_EN.pdf"
                target="_blank"
                className="header-button"
              />
            </ol>
              <Link href="/">
                <HiLanguage
                  style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }}
                  size="22"
                />
              </Link>
            
         
          </div>
          <div
            className="mobile-menu-toggle"
            onClick={props.onclick}>
            <BiMenuAltRight
              style={{ color: "var(--verde)", cursor: "pointer" }}
              size="40"
            />
          </div>
      </nav>
    </header>
  );
}

export default HeaderEN;