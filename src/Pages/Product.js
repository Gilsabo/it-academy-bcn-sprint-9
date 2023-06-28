import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const Product = () => {
  const { addToCart, cartItem } = useContext(ShopContext);
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [detailsIdProduct, setDetailsIdProduct] = useState([]);
  const [titleCategory, setTitleCategory] = useState('')

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

  useEffect(() => {
    const filtered = fetchData.filter((data) => data.id === parseInt(id));
    setDetailsIdProduct(filtered);
    setTitleCategory(
      filtered[0]?.category
        ? filtered[0].category.charAt(0).toUpperCase() + filtered[0].category.slice(1)
        : ""
    )
    console.log(filtered)
  }, [fetchData,id]);

  console.log(fetchData);
  console.log(detailsIdProduct);
  console.log(cartItem);


console.log(titleCategory)

  return (
    <div>
      <h1>{ titleCategory }</h1>
      {detailsIdProduct.length > 0 && (
        <div className="product">
          <img
            src={detailsIdProduct[0].image}
            alt="cloth"
            style={{ width: "200px" }}
          />
          <div className="title">Product: {detailsIdProduct[0].title}</div>
          <div className="price">Price: {detailsIdProduct[0].price} euros</div>
          <div className="rating">
            <div className="rate">
              <div className="count">
                {" "}
                Sold: {detailsIdProduct[0].rating.count}
              </div>
              <div className="rate">
                Rate: {detailsIdProduct[0].rating.rate}
              </div>
            </div>
            <div className="description">
              Description : {detailsIdProduct[0].description}
            </div>
            <Link to="/">to products</Link>
          </div>
          <button
            type="button"
            onClick={() => addToCart(detailsIdProduct[0].id)}
          >
            Add to Shopping Cart{" "}
            {cartItem[detailsIdProduct[0].id] > 0
              ? `(${cartItem[detailsIdProduct[0].id]})`
              : null}
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
