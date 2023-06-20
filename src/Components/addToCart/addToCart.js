
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


const AddToCart = ({itemId}) => {

  const {addToCart} = useContext(ShopContext)

  return <button type="button" onClick={()=>addToCart(itemId)}>Add to shopping cart</button>;
};

export default AddToCart;
