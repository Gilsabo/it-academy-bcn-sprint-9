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

  const updateCartItemCount = (newAmount, itemId) =>{
    setCartItem ((prev)=>({...prev, [itemId]:newAmount}))
  }

  const getTotalCartAmount = () =>{
    let totalAmount = 0
    for (const product in cartItem){
        if(cartItem[product]>0){
            console.log(product)
            console.log(cartItem)
            console.log(fetchData)
            console.log(cartItem[product])
            let itemInfo = fetchData.find((item)=> item.id === Number(product))
            console.log(product)
            console.log(itemInfo)
            totalAmount += cartItem[product] * itemInfo.price
            
        }
    }
    return totalAmount
  }


  const contextValue = { cartItem, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
