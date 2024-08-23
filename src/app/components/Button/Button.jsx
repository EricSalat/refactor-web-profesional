import * as React from "react";
import "./Button.css";
// import "./button.module.css";


function Button(props) {
  return (
    <>
      <a 
      href={props.href}
      target={props.target}
      >
        <button type="button" className={props.className}>{props.texto}</button>
      </a>
    </>
  );
}

export default Button;