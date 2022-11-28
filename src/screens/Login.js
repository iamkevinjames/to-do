import React, { useState } from "react";
import "./application.css";
import Card from "../components/Card";
import Seperator from "../components/Seperator";
import Title from "../components/Title";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import Link from "../components/Link";
import logo from "../assets/login-logo-png.png";
import CheckBox from "../components/CheckBox";

function Login() {
  const [registerComponent, setRegisterComponent] = useState(false);

  const openRegisterComponent = () => {
    setRegisterComponent(!registerComponent);
  };
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
          {registerComponent ? (
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
                  backgroundColor="rgb(66,133,244)"
                />
                <Link
                  color="#911"
                  text="Don't have an accout? Register here!"
                  onClick={openRegisterComponent}
                />
              </div>
            </Card>
          ) : (
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
                <TextBox width="200px" label="Email Address" />
                <TextBox width="200px" type="password" label="Password" />
                <TextBox
                  width="200px"
                  type="password"
                  label="Confirm Password"
                />
                <CheckBox label="I accept the terms and conditions" />
                <Button value="Register" />

                <Link
                  color="#911"
                  text="Already have an accout? Login here!"
                  onClick={openRegisterComponent}
                />
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
