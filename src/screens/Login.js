import React from "react";
import "./application.css";
import Card from "../components/Card";
import Seperator from "../components/Seperator";
import Title from "../components/Title";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Link from "../components/Link";
import logo from "../assets/login-logo-png.png";

function Login() {
  return (
    <div className="container">
      <div className="wrapper-container">
        <div className="login-left-pane">
          <img src={logo} alt="login-pic" width="500px" height="400px" />
        </div>
        <div className="seperator">
          <Seperator length="80vh" />
        </div>
        <div className="login-right-pane">
          <Card
            style={{
              backgroundColor: "rgb(255,255,255,0.9)",
              borderRadius: "5px",
            }}
            width="300px"
            height="400px"
          >
            <div>
              <Title text="My ToDo" />
            </div>
            <br />
            <div>
              <TextBox width="200px" label="User Name" />
              <TextBox width="200px" type="password" label="Password" />
              <Button value="Login" />
              <Link text="forgot password?" />
              <Button
                width="250px"
                value="Login with Google"
                backgroundColor="rgb(66,133,244,0.5)"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
