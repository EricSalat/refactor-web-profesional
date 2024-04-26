import * as React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { useTranslations } from 'next-intl';
import {Link} from '../../../navigation';

function Footer() {
  const t = useTranslations('FOOTER');

  return(
    <footer className="developed-by">
          <ul>
            <li>
              <a href="https://github.com/EricSalat" target="_blank">
                <RiGithubLine
                  size="22"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric-salat/" target="_blank">
                <SlSocialLinkedin
                  size="20"
                />
              </a>
            </li>
            <li>
              <a href="mailto:ericsalatb@gmail.com" target="_blank">
                <HiOutlineMail
                  size="22"
                />
              </a>
            </li>
          </ul>
          <p>
            {t('read-this')} <span>&#x0020;</span>
            <Link href="/" locale={t('locale')}><span style={{color: "var(--verde)", textDecorationColor: "var(--verde)"}}>{t('language')}</span></Link>
          </p>
          <p>Developed with ❤️ by  <a href="https://www.linkedin.com/in/eric-salat/" target="_blank">Èric Salat</a></p>
        </footer>
  );
}

export default Footer;