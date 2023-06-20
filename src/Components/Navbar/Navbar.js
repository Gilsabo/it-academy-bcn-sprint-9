import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
const Navbar = () => {
    return ( 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mens">Men's clothing</Link>
            </li>
            <li>
              <Link to="/women">Women's clothing</Link>
            </li>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/jewelery">Jewelery</Link>
            </li>
            <li>
              <Link to="/cart"><ShoppingCart /></Link>
            </li>
          </ul>
        </nav>
     );
}
 
export default Navbar;

