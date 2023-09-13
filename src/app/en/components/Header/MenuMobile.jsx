'use client'
import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";
import { useState } from "react";


function MenuMobile({onClick}) {

  const [languageIconMenu, setLanguageIconMenu] = useState(true)

  return(
      <div className="mobile-menu-modal animate__animated animate__fadeInRightBig animate__faster" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={onClick} href="#about">About Me</a></li>
                <li><a onClick={onClick} href="#experience">Experience</a></li>
                <li><a onClick={onClick} href="#works">Works</a></li>
                <li><a onClick={onClick} href="#next">Contact</a></li>
              </ul>
              <Button
              texto="Resume"
              href="/CV_ERIC_SALAT_BADIA_ENG.pdf"
              target="_blank"
              className="know-me-button"
            />
              { languageIconMenu ? (
              <HiLanguage style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("en-GB"); 
              setLanguageIconMenu(false);
              }} />
          ) : (
              <HiLanguage style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("es-ES"); 
              setLanguageIconMenu(true);
              }} />      
          )}
            </div>
          </nav>
        </div>
      </div>
    
  );
}

export default MenuMobile;