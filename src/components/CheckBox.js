import React from "react";

function CheckBox(props) {
  const { label = "Checkbox" } = props;

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        className="checkbox-template"
      ></input>
      <label htmlFor="checkbox" className="checkbox-label-template">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
