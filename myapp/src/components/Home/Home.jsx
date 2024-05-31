import React, { useState, useEffect } from "react";
import "./Home.css";
import { ReactComponent as Landing } from "../../assets/images/landing.svg";
import Login from "../Login/Login";

function Home() {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleClick = () => {
    setShowLoginScreen(true);
  };
  useEffect(() => {
    if (showLoginScreen) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1000); // Wait for the duration of the animation
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [showLoginScreen]);

  return (
    <>
      <div
        className={`container ${showLoginScreen ? "hidden" : ""} ${
          animationComplete ? "hidden-complete" : ""
        }`}
      >
        <div className="svg-container">
          <div className="svg-div">
            <Landing className="landing-svg" />
          </div>
          <div className="login">
            <button className="loginButton" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
      {showLoginScreen && (
        <div className="loginContainer visible">
          <Login />
        </div>
      )}
    </>
  );
}

export default Home;
