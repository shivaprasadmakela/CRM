import './register.css'

function Register() {
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
              placeholder="Enter your first name"
            ></input>
            <input
              className="emailTextbox"
              placeholder="Enter your last name"
            ></input>
            <input
              className="emailTextbox"
              placeholder="Enter your password"
            ></input>
            <button className='signUpButton'>Sign In</button>
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
