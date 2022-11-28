import React, { useState } from "react";

function Link(props) {
  const { url = "#", text = "link", color } = props;

  const [isHover, setHover] = useState(false);

  const linkStyle = {
    link: {
      color: color ? color : "rgba(50,155,50,1)",
      textDecoration: "none",
    },
    linkHovered: {
      color: color ? color : "rgba(150,255,150,1",
      textDecoration: "none",
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
      <a
        href={url}
        style={isHover ? linkStyle.linkHovered : linkStyle.link}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
      >
        {text}
      </a>
    </div>
  );
}

export default Link;
