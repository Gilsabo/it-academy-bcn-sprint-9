import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import Jewelery from "./Pages/Jewelery";

import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="Header">
        <h1>YouTooShop</h1>
        <h3>Outfits and complements to start your career as a Youtuber</h3>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<Product />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/:id" element={<Product />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electronics/:id" element={<Product />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/jewelery/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
