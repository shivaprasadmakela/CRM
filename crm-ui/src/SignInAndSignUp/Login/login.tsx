import { useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/leads";
      }
    } catch (err) {
      // Handle error response
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="mainPage">
        <div className="leftSection">
          <div className="insideSection">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "assets/crmMainLogo.png"}
              alt="logo"
            ></img>
            <h1 className="heading1">Login</h1>
            <p className="subHeading">
              <span className="loginSpan">Don't have Account</span>{" "}
              <a className="anchorElement" href="/signUp">
                Register here
              </a>
            </p>
            <input
              className="emailTextbox"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              className="emailTextbox"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="signUpButton" onClick={handleSubmit}>
              Sign In
            </button>
            <p className="termsAck">
              By continuing, you acknowledge that you have read and understood,
              and agree to Page builder 
              <a href="/Terms of Use">Terms of Use.</a>
              Please review our 
              <a href="/PrivacyPolicy">Privacy Policy.</a>
            </p>
          </div>
        </div>
        <div className="rightSection">
          <img
            src={process.env.PUBLIC_URL + "assets/main image.png"}
            alt="logo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
