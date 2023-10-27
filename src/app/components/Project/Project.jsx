import * as React from "react";
import "./Project.css";
import { FcOpenedFolder } from "react-icons/fc";
// import { FiFolder } from "react-icons/fi";
import { RiShareBoxLine, RiGithubLine } from "react-icons/ri";


function Project(props) {
    return(
      <div>
        <div className="project-card">
          <header className="project-top">
            <div>
              <a href={props.weblink} target="_blank">
                <FcOpenedFolder />
              </a>
            </div>
            <div>
              <a href={props.githublink} target="_blank">
                <RiGithubLine size="27.5" style={{marginRight: 10}} />
              </a>
              <a href={props.weblink} target="_blank">
                <RiShareBoxLine size="27"/>
              </a>
              
            </div>
            
          </header>
          <div>
            <a href={props.weblink}>
              <h3>{props.title}</h3>
            </a>
            <p className="project-description">{props.description}</p>
          </div>
          <footer>
            <ul>
              <li>{props.tech}</li>
              <li>{props.tech2}</li>
              <li>{props.tech3}</li>
              <li>{props.tech4}</li>
            </ul>
          </footer>
        </div>
      </div>
    );
}


export default Project;