import React from "react";
import "./components.css";

function Button(props) {
  const {
    value = "Button",
    type,
    className,
    onClick = () => {
      console.log("Button Clicked");
    },
  } = props;

  return (
    <button
      className={`button-template ${className}`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
