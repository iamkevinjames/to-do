import React from "react";

function Title(props) {
  const { text = "Title", upperCase = false, className = "" } = props;
  const titleStyle = {
    title: {
      textAlign: "center",
      fontSize: "2em",
      fontWeight: "bold",
      paddingTop: "25px",
      paddingBottom: "20px",
      // background: "linear-gradient(rgba(150,255,150),rgb(100,0,25,0.9) )",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
    },
  };

  return (
    <div className={className} style={titleStyle.title}>
      {upperCase ? text.toUpperCase() : text}
    </div>
  );
}

export default Title;
