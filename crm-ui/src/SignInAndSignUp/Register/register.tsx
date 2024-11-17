import axios from "axios";
import "./register.css";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", {
        username,
        password,
        email,
      });

      if (response.status === 200) {
        window.location.href = "/login";
      }
    } catch (err) {
      // Handle error response
      setError("Invalid error");
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
            <h1 className="heading1">Register</h1>
            {/* <p className='subHeading'>
              <span className='loginSpan'>Don't have Account</span> Register here
            </p> */}
            <input
              className="emailTextbox"
              placeholder="Enter your user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              className="emailTextbox"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default Register;
