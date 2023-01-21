import React from "react";

function Card(props) {
  const { style = {}, className } = props;

  return (
    <div className={`${className}  card-template`} style={style}>
      {props.children}
    </div>
  );
}

export default Card;
