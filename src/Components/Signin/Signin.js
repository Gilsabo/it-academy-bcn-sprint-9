import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Auth-context";
import youtubeLogo from "../../images/youtube-logo.png";
import "./Signin.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    navigate("/");
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main className="main-box">
      <div className="left-box">
        <h2>Sign in to keep purchasing </h2>
        <h2>Sign in to grow your audience </h2>
        <img src={youtubeLogo} alt="youtube-logo" className="youtube-logo" />
      </div>
      <div className="right-box">
        <h3>Sign in to your account</h3>
        <p>
          Don't have an account? <Link to="/signup">Sign up.</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Email adress</label>
          <input className="input-login"  onChange={(e) => setEmail(e.target.value)} type="email" />
          <label htmlFor="password">Password</label>
          <input
          className="input-login" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-in-button">Sign in</button>
        </form>
      </div>
    </main>
  );
};

export default Signin;
