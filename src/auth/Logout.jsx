import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login data
    localStorage.removeItem("isLoggedIn");
    // If you're storing token or user info, clear that too
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  }, [navigate]);

  return null; // Optional: show a spinner or "Logging out..." message
};

export default Logout;
