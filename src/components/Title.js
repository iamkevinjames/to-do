import React from "react";

function Title(props) {
  const { text, upperCase = false, className = "", children } = props;

  return (
    <h1 className={`${className} title-template`}>
      {children}
      {text && upperCase ? text.toUpperCase() : text}
    </h1>
  );
}

export default Title;
