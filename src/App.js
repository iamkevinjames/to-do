import "./App.css";
import React, { useState } from "react";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Compete from "./screens/Compete";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <React.Fragment>
      {localStorage.getItem("LoggedInStatus") &&
      localStorage.getItem("LoggedInStatus") === "true" ? (
        <Compete />
      ) : (
        <Login setLoggedInStatus={setIsLoggedIn} />
      )}
    </React.Fragment>
  );
}

export default App;
