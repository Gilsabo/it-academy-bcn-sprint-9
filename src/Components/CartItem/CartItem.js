import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = ({ item }) => {
  
  const { cartItem, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  console.log(cartItem);

  return (
    <>
      <div className="item">
        <img src={item.image} alt="product" style={{ width: "200px" }} />
        <div>{item.title}</div>
      </div>
      <div className="countHandler">
        <button onClick={()=>removeFromCart(item.id)}>-</button>
        <input value={cartItem[item.id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), item.id)}/>
        <button onClick={()=>addToCart(item.id)}>+</button>
      </div>
    </>
  );
};

export default CartItem;
