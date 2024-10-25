import "./signUp.css";
import React, { useState } from "react";

const ImageLogo = () => {
  return (
    <img
      className="logo"
      src={process.env.PUBLIC_URL + "assets/crmMainLogo.png"}
      alt="logo"
    ></img>
  );
};

function SignUp() {
  const [sucessToggle, setSucessToggle] = useState("showSignUp");
  const SucessToggle = () => {
    setSucessToggle("showSucess");
  };

  return (
    <div className="mainPage">
      <div className="leftSection">
        {sucessToggle === "showSignUp" ? (
          <div className="insideSection">
            {ImageLogo()}
            <h1 className="heading1">Create a free account</h1>
            <p className="subHeading">
              <span className="loginSpan">Or</span>{" "}
              <a className="anchorElement" href="/login">
                Login here
              </a>
            </p>
            <input
              className="emailTextbox"
              placeholder="Type ur email here"
            ></input>
            <button className="signUpButton" onClick={SucessToggle}>
              Sign up
            </button>
            <p className="termsAck">
              By continuing, you acknowledge that you have read and understood,
              and agree to Page builder 
              <a href="/Terms of Use">Terms of Use.</a>
              Please review our 
              <a href="/PrivacyPolicy">Privacy Policy.</a>
            </p>
          </div>
        ) : (
          <div className="insideSection">
            {ImageLogo()}
            <h1>Congratulations!</h1>
            <div className="containerMessage">
              <p className="containerMessagePara">
                We have sent you an activation Link on your email. Please be
                sure to check your Spam Folder too
              </p>
            </div>
            <button className="signUpButton">Resend link</button>
          </div>
        )}
      </div>
      <div className="rightSection">
        <img
          src={process.env.PUBLIC_URL + "assets/main image.png"}
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default SignUp;
