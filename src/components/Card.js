import React from "react";

function Card(props) {
  const { height = "200px", width = "200px", style = {} } = props;

  const cardStyle = {
    cardContainer: {
      height: height,
      width: width,
      border: "0.01em solid rgba(255, 255, 255,0.2)",
      borderRadius: "0.3em",
      boxShadow: "0.01em 0.01em 1em 0.1em rgba(0,0,0,0.1)",
    },
    card: {
      height: "100%",
      width: "100%",
      ...style,
    },
  };

  return (
    <div style={cardStyle.cardContainer}>
      <div style={cardStyle.card}>{props.children}</div>
    </div>
  );
}

export default Card;
