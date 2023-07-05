import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { cartItem, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  console.log(cartItem);

  return (
    <>
      <div className="item">
        <img src={item.image} alt="product" className="image-cart" />
        <div>{item.title}</div>

        <div className="countHandler">
          <button
            className="button-cart"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </button>
          <input
            className="input-quantity"
            value={cartItem[item.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), item.id)
            }
          />
          <button className="button-cart" onClick={() => addToCart(item.id)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
