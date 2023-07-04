import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Account from "../Account/Account";
import "./Navbar.css";
import { UserAuth } from "../../context/Auth-context";
const Navbar = () => {
  const { user } = UserAuth();

  return (
    <nav className="navbar">
      <ul className="nav-left-side">
        <li className="list-box">
          <Link className="link-nav" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/mens">
            Men's clothing
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/women">
            Women's clothing
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/electronics">
            Electronics
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/jewelery">
            Jewelery
          </Link>
        </li>
        <li>
          <Link className="link-nav" to="/cart">
            <ShoppingCart />
          </Link>
        </li>
      </ul>
      <ul className="nav-right-side">
        {!user ? (
          <div className="links">
            <li>
              <Link className="link-nav" to="/signin">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="link-nav" to="/signup">
                Sign up
              </Link>
            </li>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <div className="account">
            <li className="link-nav account">
              <Account />
            </li>
          </div>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
