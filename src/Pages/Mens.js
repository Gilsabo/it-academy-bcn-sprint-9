import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Components/addToCart/addToCartButton";



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
        <div className="product">
          {clothingItems.map((item, index) => (
            <React.Fragment key={index}>
              <img src={item.image} alt="cloth" style={{ width: "200px" }} />
              <div className="title">Product: {item.title}</div>
              <div className="price">Price: {item.price} euros</div>
              <div className="rating">
                <div className="count">Sold: {item.rating.count}</div>
                <div className="rate">Rate: {item.rating.rate}</div>
                <Link to={`/mens/${item.id}`}>to product</Link>
                <AddToCart itemId={item.id}/>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mens;
