import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Women = () => {
  const [fetchData, setFetchData] = useState([]);
  const [clothingItems, setClothingItems] = useState('');

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
      (data) => data.category === "jewelery"
    );
    setClothingItems(filterMenClothesFromData);
  }, [fetchData]);

  return (
    <div>
      <h1>Jewelery </h1>
      {clothingItems &&  (
        <div className="product">
          {clothingItems.map((item, index) => (
            <React.Fragment key={index}>
                <img src={item.image} alt="cloth" />
              <div className="title">Product: {item.title}</div>
              <div className="price">Price: {item.price} euros</div>
              <div className="rating">
                <div className="rate">Sold: {item.rating.count}</div>
                <div className="rate">Rate: {item.rating.rate}</div>
              </div>
            </React.Fragment>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Women;
