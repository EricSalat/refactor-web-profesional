import * as React from "react";
import "./Header.css";
import Button from "@/app/components/Button/Button";
import { IoIosClose } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";
import Link from "next/link";



function MenuMobileEN({onClick}) {


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
              href="/CV_ERIC_SALAT_2023_EN.pdf"
              target="_blank"
              className="know-me-button"
            />
            <Link href="/">
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

export default MenuMobileEN;