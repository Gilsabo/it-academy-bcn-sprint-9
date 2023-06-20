import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setFetchData(response.data);
        setCartItem(getDefaultCart(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getDefaultCart = (data) => {
    let cart = {};
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item && item.id) {
        const itemId = item.id;
        cart[itemId] = 0;
      }
    }
    return cart;
  };

  console.log(cartItem);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
