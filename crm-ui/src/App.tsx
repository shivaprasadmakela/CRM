import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./SignInAndSignUp/Login/login";
import SignUp from "./SignInAndSignUp/SignUp/signUp";
import Register from "./SignInAndSignUp/Register/register";
import LandingPages from "./LandingPage/landingPage";
import Leads from "./MainPage/leads";

interface ProtectedRouteProps {
  component: JSX.Element;
}

function App() {
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Login />;
    }

    return component;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/leads"
          element={<ProtectedRoute component={<Leads />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
