import React from "react";

function TextBox(props) {
  const { label, className } = props;

  return (
    <div>
      {label && (
        <div>
          <label className={"textbox-label-template"}>{label}:</label>
        </div>
      )}
      <input {...props} className={`textBox-template ${className}`} />
    </div>
  );
}

export default TextBox;
