import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Components/addToCart/addToCartButton";
import "./Mens.css"



const Mens = () => {
  
  const [fetchData, setFetchData] = useState([]);
  const [clothingItems, setClothingItems] = useState("");

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
    const filterMenClothesFromData = fetchData.filter(
      (data) => data.category === "men's clothing"
    );
    setClothingItems(filterMenClothesFromData);
  }, [fetchData]);

  return (
    <div>
      <h1>Men's clothing </h1>
      {clothingItems && (
        <div className="products">
        {clothingItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="product">
              <div className="image-container">
                <img className="image-of-product" src={item.image} alt="cloth"  />
              </div>
              <div className="title">Product:</div>
              <div className="name-of-product">{item.title}</div>
              <div className="price">Price: {item.price} euros</div>
              <div className="link">
                <Link to={`/mens/${item.id}`}>to product</Link>
              </div>
              <AddToCart itemId={item.id} />
            </div>
          </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mens;
