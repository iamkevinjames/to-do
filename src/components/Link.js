import React, { useState } from "react";

function Link(props) {
  const { text = "link", color, onClick = () => {} } = props;

  const [isHover, setHover] = useState(false);

  const linkStyle = {
    link: {
      color: color ? color : "rgba(50,155,50)",
      opacity: 1,
      textDecoration: "none",
    },
    linkHovered: {
      color: color ? color : "rgba(50,155,50)",
      opacity: 0.6,
      textDecoration: "none",
      cursor: "pointer",
    },
    linkContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const onHover = () => {
    setHover(true);
  };
  const offHover = () => {
    setHover(false);
  };
  return (
    <div style={linkStyle.linkContainer}>
      <div
        onClick={onClick}
        style={isHover ? linkStyle.linkHovered : linkStyle.link}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
      >
        {text}
      </div>
    </div>
  );
}

export default Link;
