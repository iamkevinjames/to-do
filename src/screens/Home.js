import React, { useState } from "react";
import Title from "../components/Title";
import "./application.css";

function Home() {
  const navigationitems = [
    { name: "My ToDo", module: "MyToDo" },
    { name: "Groups", module: "Groups" },
    { name: "Contact", module: "Contact" },
  ];
  const [open, setOpnen] = useState(false);
  console.log(useState(true));
  const openHome = () => {
    setOpnen(true);
  };
  const navigationItemClicked = (option) => {
    console.log(option);
  };

  return (
    <div className="home">
      <div className={open ? "leftWindow openLeft" : "leftWindow"}></div>
      <div className={open ? "rightWindow openRight" : "rightWindow"}></div>
      <div
        className={open ? "openButton removeButton" : "openButton"}
        onClick={openHome}
      >
        OPEN
      </div>
      <div className="home-container">
        <div>
          <Title text="My ToDo" />
        </div>
        <span>Plan your Day Track your Works</span>
        <span>End of the Day See How it Works</span>

        <div className="navigation-items">
          {navigationitems.map((item) => {
            return (
              <div
                className="navigation-item"
                key={item.module}
                onClick={navigationItemClicked}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
