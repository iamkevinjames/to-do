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

function Login(props) {
  const [registerComponent, setRegisterComponent] = useState(false);
  const [userData, setUserData] = useState({});

  const openRegisterComponent = () => {
    setRegisterComponent(!registerComponent);
  };

  const onSubmit = () => {
    if (registerComponent) {
      localStorage.setItem("LoggedInStatus", "true");
      props.setLoggedInStatus(true);
    }
  };

  const onHandleChange = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    console.log(userData);
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
            <Card className="login-container">
              <div>
                <Title text="My ToDo" />
              </div>
              <br />
              <TextBox
                label="Email Address"
                value={userData.email ? userData.email : ""}
                name="email"
                onChange={onHandleChange}
              />
              <TextBox
                type="password"
                label="Password"
                name="password"
                value={userData.password ? userData.password : ""}
                onChange={onHandleChange}
              />
              <Button value="Login" type="submit" onClick={onSubmit} />
              <Link text="forgot password?" />
              <Button value="Login with Google" type="submit" />
              <Link
                text="Don't have an accout? Register here!"
                onClick={openRegisterComponent}
              />
            </Card>
          ) : (
            <Card className="login-container">
              <div>
                <Title text="My ToDo" />
              </div>
              <br />
              <TextBox
                label="Email Address"
                value={userData.email ? userData.email : ""}
                name="email"
                onChange={onHandleChange}
              />
              <TextBox
                type="password"
                label="Password"
                name="password"
                value={userData.password ? userData.password : ""}
                onChange={onHandleChange}
              />
              <TextBox
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={userData.password ? userData.password : ""}
                onChange={onHandleChange}
              />
              <CheckBox
                label="I accept the terms and conditions"
                onChange={onHandleChange}
              />
              <Button value="Register" type="submit" onClick={onSubmit} />

              <Link
                text="Already have an accout? Login here!"
                onClick={openRegisterComponent}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
