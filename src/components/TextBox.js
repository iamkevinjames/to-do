import React, { useState } from "react";

function TextBox(props) {
  const { type = "text", width = "10em", height = "1.5em", label } = props;

  const [isActive, setActive] = useState(false);

  const textBoxStyle = {
    textBox: {
      backgroundColor: "transparent",
      width: width,
      height: height,
      border: "0.01em solid rgba(0,0,0,0.1)",
      borderRadius: "0.4em",
      fontSize: "1em",
      padding: "3px 10px",
      margin: "0.5em",
      marginTop: label ? "" : "0.5em",
    },
    textBoxActive: {
      backgroundColor: "transparent",
      width: width,
      height: height,
      border: "0.01em solid rgba(0,0,0,0.1)",
      borderRadius: "0.4em",
      outline: "0.01em solid rgba(0,0,0,0.5)",
      fontSize: "1em",
      padding: "3px 10px",
      margin: "0.5em",
      marginTop: label ? "" : "0.5em",
    },
    textBoxContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    textBoxLabel: { marginLeft: "1em" },
  };

  const onActive = () => {
    setActive(true);
  };
  const offActive = () => {
    setActive(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={textBoxStyle.textBoxContainer}>
        {label && (
          <div>
            <label style={textBoxStyle.textBoxLabel}>{label}:</label>
          </div>
        )}
        <input
          type={type}
          className="textBox"
          style={isActive ? textBoxStyle.textBoxActive : textBoxStyle.textBox}
          onMouseEnter={onActive}
          onMouseLeave={offActive}
        />
      </div>
    </div>
  );
}

export default TextBox;
