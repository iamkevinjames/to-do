import React from "react";

function CheckBox(props) {
  const { label = "Checkbox" } = props;

  const checkboxStyle = {
    checkbox: {
      width: "1.5em",
      height: "1.5em",
    },
    checkboxContainer: {
      display: "flex",
    },
    checkboxLabel: {
      fontSize: "1.2em",
      marginLeft: ".5em",
    },
  };
  return (
    <div style={checkboxStyle.checkboxContainer}>
      <input
        id="checkbox"
        type="checkbox"
        style={checkboxStyle.checkbox}
      ></input>
      <label for="checkbox" style={checkboxStyle.checkboxLabel}>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
