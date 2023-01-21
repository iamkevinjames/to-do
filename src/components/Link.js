import React from "react";

function Link(props) {
  const { text = "link", className, onClick = () => {} } = props;

  return (
    <div className={`${className} link-template`} onClick={onClick}>
      {text}
    </div>
  );
}

export default Link;
