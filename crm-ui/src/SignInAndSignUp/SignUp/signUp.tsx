import "./signUp.css";

function SignUp() {
  return (
    <div className="mainPage">
      <div className="leftSection">
        <div className="insideSection">
          <img
            src={process.env.PUBLIC_URL + "assets/crm logo p.svg"}
            alt="logo"
          ></img>
          <h1 className="heading1">Create a free account</h1>
          <p>
            <span>Or</span> Login here
          </p>
          <input
            className="emailTextbox"
            placeholder="Type ur email here"
          ></input>
          <button>Sign up</button>
          <p className="termsAck">
            By continuing, you acknowledge that you have read and understood,
            and agree to Page builder <a href="/Terms of Use">Terms of Use.</a>
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
  );
}

export default SignUp;
