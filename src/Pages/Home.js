import { Link } from "react-router-dom";
import mens from "../images/mens.jpg";
import womens from "../images/women.jpg";
import electronics from "../images/electronics.jpg";
import jewelery from "../images/jewelery.jpg";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="mens-box product-box">
        <Link to="/mens">
          <button className="button-box">Men's Clothing</button>
        </Link>
        <img className="image-home" src={mens} alt="electronics" />
      </div>
      <div className="womens-box product-box">
        <Link to="/women">
          <button className="button-box">Women's Clothing</button>
        </Link>
        <img className="image-home" src={womens} alt="womens" />
      </div>
      <div className="electronics-box product-box">
        <Link to="/electronics">
          <button className="button-box">Electronics</button>
        </Link>
        <img className="image-home" src={electronics} alt="electronics" />
      </div>
      <div className="jewelery-box product-box">
        <Link to="/jewelery">
          <button className="button-box">Jewelery</button>
        </Link>
        <img className="image-home" src={jewelery} alt="electronics" />
      </div>
    </>
  );
};

export default Home;
