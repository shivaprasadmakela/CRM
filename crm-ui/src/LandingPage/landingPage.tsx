import "./landingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPages() {
  const navigator = useNavigate();

  const NavigateToRegisterPage = () => {
    navigator("/signUp");
  };

  const NavigateToLoginPage = () => {
    navigator("/login");
  };

  return (
    <div className="mainLandingPageContainer">
      <h1>This is the landing page</h1>
      <div className="navigateButtons">
        <button className="signUpButton a" onClick={NavigateToLoginPage}>
          Sign IN
        </button>
        <button className="signUpButton a" onClick={NavigateToRegisterPage}>
          Sign UP
        </button>
      </div>
    </div>
  );
}

export default LandingPages;
