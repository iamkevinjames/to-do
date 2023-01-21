import React, { useEffect, useState } from "react";
let constTime;
function Timer(props) {
  const { endTime } = props;
  const [timer, setTimer] = useState({});

  useEffect(() => {
    constTime =
      new Date(new Date().setHours(new Date().getHours() + parseInt(endTime))) -
      new Date();
    setInterval(() => {
      setTimer({
        hours: Math.floor(constTime / (60 * 60 * 1000)),
        minutes: Math.floor((constTime % 3600000) / 60000),
        seconds: ((constTime % 60000) / 1000).toFixed(0),
      });
      constTime -= 250;
    }, 1000);
  }, []);

  return (
    <div>
      {(timer.hours === "0" ? "" : `${timer.hours}:`) +
        timer.minutes +
        ":" +
        timer.seconds}
    </div>
  );
}

export default Timer;
