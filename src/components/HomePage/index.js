import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "../Loader";
import "./index.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data)
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products, loading);

  return (
    <div className="main-page">
      {loading ? (
        <Loader />
      ) : (
        <div>
        <h1 className="heading">Products</h1>
        <ul className="products-container">
        
          {products.map((product) => (
            <li className="product" key={product.id}>
              <Link className="link" to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <div className="rating-amount-container">
                  <p className="price">Price: {product.price}$</p>
                  <p className="rating">Rating: {product.rating.rate}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;