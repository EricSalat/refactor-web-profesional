import * as React from "react";
import "./Project.css";
import { FcOpenedFolder } from "react-icons/fc";
// import { FiFolder } from "react-icons/fi";
import { RiShareBoxLine, RiGithubLine, RiGitCommitLine } from "react-icons/ri";


function Project(props) {
    return(
      <div>
        <div className="project-card">
          <header className="project-top">
            <div className="project-top-commits">
              <a href={props.weblink} target="_blank">
                {/* <FcOpenedFolder /> */}
                <RiGitCommitLine style={{color: "var(--verde)"}} />
              </a>

              <p>{props.commits} X commits</p>
            </div>
            <div>
              <a href={props.githublink} target="_blank">
                <RiGithubLine size="27.5" style={{marginRight: 10}} />
              </a>
              <a href={props.weblink} target="_blank">
                <RiShareBoxLine size="27" />
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
              <li>{props.tech[0]}</li>
              <li>{props.tech[1]}</li>
              <li>{props.tech[2]}</li>
              <li>{props.tech[3]}</li>
            </ul>
          </footer>
        </div>
      </div>
    );
}


export default Project;