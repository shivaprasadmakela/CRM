import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./SignInAndSignUp/Login/login";
import SignUp from "./SignInAndSignUp/SignUp/signUp";
import Register from "./SignInAndSignUp/Register/register";
import LandingPages from "./LandingPage/landingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
