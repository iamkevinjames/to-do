import React, { useState } from "react";

function Button(props) {
  const {
    value = "Button",
    width = "150px",
    height = "35px",
    fontSize = "1em",
    backgroundColor,
    onClick = () => {
      console.log("Clicked");
    },
  } = props;

  const [ishover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const offHover = () => {
    setHover(false);
  };

  const buttonStyle = {
    button: {
      color: "rgba(120,120,120,1)",
      backgroundColor: "transparent",
      width: width,
      height: height,
      border: "0.01em solid rgba(0,0,0,0.1)",
      borderRadius: "0.4em",
      margin: "10px",
      fontSize: fontSize,
    },
    buttonHover: {
      color: "rgba(10,10,10,1)",
      backgroundColor: backgroundColor ? backgroundColor : "rgba(150,255,150)",
      width: width,
      height: height,
      border: "0",
      borderRadius: "0.4em",
      fontSize: fontSize,
      margin: "10px",
      cursor: "pointer",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <div style={buttonStyle.buttonContainer}>
      <button
        style={ishover ? buttonStyle.buttonHover : buttonStyle.button}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
