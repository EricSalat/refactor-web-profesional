import * as React from "react";
import "./Header.css";
import 'animate.css';
import Button from "../Button/Button";
import Image from 'next/image'
// import Link from "next/link";
import {Link} from '../../../navigation';
import logo from "../../../../public/logo.png";
// import DropdownMenu from "../Header/DropdownMenu";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { useTranslations } from 'next-intl';



function Header(props) {
  const t = useTranslations('HEADER');
  return (
    <header>
      <nav className="animate__animated animate__fadeInDown animate__delay-2s">
           {/* <Link href="/" locale={t('locale')}> */}
               <Image src={logo} height="40" width="40"  alt="" />
           {/* </Link> */}
          <div className="contenedor-menu">
            <ol>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#experience">{t('experience')}</a></li>
              <li><a href="#works">{t('works')}</a></li>
              <li><a href="#next">{t('next')} </a></li> 
              
              <Button
                texto={t('cv')}
                href={t('cv-file')}
                target="_blank"
                className="header-button"
              />
            </ol>
              <Link href="/" locale={t('locale')}>
                <HiLanguage
                  style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }}
                  size="22"
                />
              </Link>
          {/* <button className="language-menu">ES</button> */}
          {/* <DropdownMenu /> */}
            
         
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