import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import Jewelery from "./Pages/Jewelery";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import ShoppingCart from "./Pages/ShoppingCart";
import ShopContextProvider from "./context/shop-context";
import Signin from "./Components/Signin/Signin.js";
import Signup from "./Components/Signup/Signup.js";
import { AuthContextProvider } from "./context/Auth-context";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import "./App.css"

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="header">
          <h1 className="title">YouTooShop</h1>
          <h3 className="subtitle">Outfits and complements to start your career as a Youtuber</h3>
          <Navbar />
        </div>
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Mens />} />
            <Route
              path="/mens/:id"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route path="/women" element={<Women />} />
            <Route
              path="/women/:id"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route path="/electronics" element={<Electronics />} />
            <Route
              path="/electronics/:id"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route
              path="/jewelery/:id"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ShopContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
