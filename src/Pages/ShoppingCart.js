import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem/CartItem";
import { Link } from "react-router-dom";
import "./ShoppingCart.css"

const ShoppingCart = () => {
  const [fetchData, setFetchData] = useState([]);
  const { cartItem, getTotalCartAmount  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setFetchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(fetchData);
  console.log(cartItem);

console.log(totalAmount)

  return (
    <div className="shopping-cart-container">
      <h1 className="header-cart">Shopping cart</h1>
      <div className="items">
        {fetchData.map((item) => {
          if (cartItem[item.id] !== 0) return <CartItem item={item} />;
        })}
      </div>
      <div className="checkout">
        <p>subtotal: {totalAmount} euros</p>
        <Link to="/" className="link-shopping"><button className="button-shopping"> Continue Shopping</button></Link>
        
        <button className="button-shopping">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
