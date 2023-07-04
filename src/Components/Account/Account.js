import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Auth-context";
import "./Account.css"
const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      {user ? (
        <div className="login-section">
          <div>User:{user && user.email}</div>
          <button className="logout-button" onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Account;
