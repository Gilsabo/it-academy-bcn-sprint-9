import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem/CartItem";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const [fetchData, setFetchData] = useState([]);
  const { cartItem, getTotalCartAmount  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

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
    <>
      <h1>Shopping cart</h1>
      <div className="item">
        {fetchData.map((item) => {
          if (cartItem[item.id] !== 0) return <CartItem item={item} />;
        })}
      </div>
      <div className="checkout">
        <p>subtotal: {totalAmount} $</p>
        <Link to="/"><button> Continue Shopping</button></Link>
        
        <button>Checkout</button>
      </div>
    </>
  );
};

export default ShoppingCart;
