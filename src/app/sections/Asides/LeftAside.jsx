import * as React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { RiGithubLine, RiTwitterLine } from "react-icons/ri";
import styles from "./asides.module.css";

export default function LeftAside() {
  return(
    <aside className="left-aside animate__animated animate__fadeInUp animate__delay-2s">
      <div>
        <div>
          <ul>
            <li>
              <a href="https://github.com/EricSalat" target="_blank">
                <RiGithubLine
                  size="22"
                  style= {{}}
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
              <a href="https://twitter.com/EricSalat" target="_blank">
                <RiTwitterLine
                size="22"
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
        </div>
      </div>
    </aside>  
  );
}