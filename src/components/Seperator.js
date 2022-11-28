import React from "react";

function Seperator(props) {
  const { horizontal = true, vertical = false, length = "100px" } = props;

  const seperatorStyle = {
    seperator: {
      width: horizontal ? "0px" : length,
      height: vertical ? "1px" : length,
      border: "1px solid rgba(150, 150,150,0.1)",
      boxShadow: "1px 2px 2px 1px rgba(200, 200, 200, 0.1)",
    },
  };

  return <div style={seperatorStyle.seperator}></div>;
}

export default Seperator;
