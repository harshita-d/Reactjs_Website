import React, { useState, useEffect } from "react";
import "./Login.css";
import { ReactComponent as LoginSvg } from "../../assets/images/login.svg";

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the slide-in animation when the component mounts
  }, []);
  return (
    <div className="login-div">
      <div className={`svg-login-div ${isVisible ? "animateSVG" : ""}`}>
        <LoginSvg className="login-svg" />
      </div>
      <div className={`login-left-panel ${isVisible ? "animate" : ""}`}>
        <div className="loginHeading">Login</div>
        <input
          type="email"
          placeholder="Email"
          required
          className="input-div"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="input-div"
        />
        <button type="submit" className="loginSubmit">
          Login
        </button>
        <div className="signin-tab">Signin</div>
      </div>
    </div>
  );
}

export default Login;
