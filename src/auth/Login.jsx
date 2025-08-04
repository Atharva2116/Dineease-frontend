import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("https://dineease-backend-green.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", true);
        alert(data.message || "Login successful!");
        
        navigate("/home");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? "👁️" : "🙈" }
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
  Don't have an account? <Link to="/register">Register</Link>
</p>


{/*         <p>
          Don't have an account? <a href="/register">Register</a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
