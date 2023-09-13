import * as React from "react";

function JobsCard(props) {
  

  return(
    <div className="job-description animate__animated animate__fadeIn">
      {
        <div id={props.id}>
          <h3>{props.role} — <a href={props.href} target="_blank">{props.company}</a></h3>
          <p>{props.period}</p>
          <ul>
            <li>{props.duty1}</li>
            <li>{props.duty2}</li>
            <li>{props.duty3}</li>
            <li>{props.duty4}</li>
          </ul>
        </div>  
      }
    </div>
  
    );
}

export default JobsCard;