import { useNavigate } from "react-router-dom";

function Leads() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Hai iam Lead...!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Leads;
