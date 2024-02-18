import * as React from "react";
import "./Header.css";
import 'animate.css';
import Button from "../Button/Button";
import Image from 'next/image'
import Link from "next/link";
import logo from "../../../../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";



function Header(props) {

  return (
    <header>
      <nav className="animate__animated animate__fadeInDown animate__delay-2s">
           <Link href="/">
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
                href="/CV_ERIC_SALAT_2024_ES.pdf"
                target="_blank"
                className="header-button"
              />
            </ol>
              <Link href="/en">
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

export default Header;