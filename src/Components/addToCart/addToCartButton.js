import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const AddToCart = ({ itemId }) => {
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[itemId];

 
  return (
    <button type="button" onClick={() => addToCart(itemId)}>
      Add to shopping cart
      {cartItemAmount > 0 ? ` (${cartItemAmount})` : null}
    </button>
  );
};

export default AddToCart;
