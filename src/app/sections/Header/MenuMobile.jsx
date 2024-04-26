import * as React from "react";
import {useTranslations} from 'next-intl';
import {Link} from '../../../navigation';
import "./Header.css";
import Button from "../../components/Button/Button";
import { IoIosClose } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";





function MenuMobile({onClick}) {
  const t = useTranslations('HEADER');

  return(
      <div className="mobile-menu-modal animate__animated animate__fadeInRightBig animate__faster" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={onClick} href="#about">{t('about')}</a></li>
                <li><a onClick={onClick} href="#experience">{t('experience')}</a></li>
                <li><a onClick={onClick} href="#works">{t('works')}</a></li>
                <li><a onClick={onClick} href="#next">{t('next')}</a></li>
              </ul>
              <Button
              texto={t('cv')}
              href={t('cv-file')}
              target="_blank"
              className="know-me-button"
            />

            <Link href="/" locale={t('locale')}>
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