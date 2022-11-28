import React from "react";

function CheckBox(props) {
  const { label = "Checkbox" } = props;

  const checkboxStyle = {
    checkbox: {
      width: "1em",
      height: "1em",
      marginTop: "0.5em",
    },
    checkboxContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    checkboxLabel: {
      fontSize: "0.9em",
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
