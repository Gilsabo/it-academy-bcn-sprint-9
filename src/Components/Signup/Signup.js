import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
import { useState } from "react";
import { UserAuth } from "../../context/Auth-context";
import youtubeLogo from "../../images/youtube-logo.png"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <main className="main-box">
      <div className="left-box">
        <h2>Sign up and start your dream</h2>
        <h2>"Likes" are awaiting you</h2>
        <img src={youtubeLogo} alt="youtube-logo" className="youtube-logo"/>
      </div>
      <div className="right-box">
        <h3>Sign up for a free account</h3>
        <p>
          Already have an account? <Link to="/signin">Sign in.</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Email adress</label>
          <input className="input-login" type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input
            className="input-login" type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-up-button">Sign up</button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
