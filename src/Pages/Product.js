import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import AddToCart from "../Components/addToCart/addToCart";

const Product = () => {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [detailsIdProduct, setDetailsIdProduct] = useState([]);

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
  }, [fetchData]);

  console.log(fetchData);
  console.log(detailsIdProduct);

  return (
    <div>
      <h1>Men's clothing </h1>
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

            <Link to="/mens/">to products</Link>
          </div>
          <AddToCart />
        </div>
      )}
    </div>
  );
};

export default Product;
