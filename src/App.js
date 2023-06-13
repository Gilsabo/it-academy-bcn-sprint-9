
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import Jewelery from "./Pages/Jewelery";
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="Header">
        <h1>YouTooShop</h1>
        <h3>Outfits and complements to start your career as a Youtuber</h3>
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
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
      </Routes>
    </>
  );
}

export default App;
