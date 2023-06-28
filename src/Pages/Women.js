import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Components/addToCart/addToCartButton";

const Women = () => {
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
  console.log(fetchData);
  console.log(clothingItems);

  useEffect(() => {
    const filterMenClothesFromData = fetchData.filter(
      (data) => data.category === "women's clothing"
    );
    setClothingItems(filterMenClothesFromData);
  }, [fetchData]);

  return (
    <div>
      <h1>Women's clothing </h1>
      {clothingItems && (
        <div className="products">
        {clothingItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="product">
              <img src={item.image} alt="cloth" style={{ width: "200px" }} />
              <div className="title">Product: {item.title}</div>
              <div className="price">Price: {item.price} euros</div>
              <div className="link">
                <Link to={`/women/${item.id}`}>to product</Link>
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

export default Women;
