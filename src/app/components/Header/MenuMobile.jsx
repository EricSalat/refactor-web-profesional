import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";


function MenuMobile({onClick}) {

  return(
      <div className="mobile-menu-modal animate__animated animate__fadeInRightBig animate__faster" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={onClick} href="#about">Sobre mi</a></li>
                <li><a onClick={onClick} href="#experience">Experiencia</a></li>
                <li><a onClick={onClick} href="#works">Trabajos</a></li>
                <li><a onClick={onClick} href="#next">Contacto</a></li>
              </ul>
              <Button
              texto="Currículum"
              href="/CV_ERIC_SALAT_2023_ES.pdf"
              target="_blank"
              className="know-me-button"
            />

            <Link href="/en">
                <HiLanguage
                  style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }}
                  size="22"
                />
            </Link>
            </div>
          </nav>
        </div>
      </div>
    
  );
}

export default MenuMobile;