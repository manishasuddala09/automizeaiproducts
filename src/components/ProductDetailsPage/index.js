// ProductDetailsPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Loader";
import "./index.css";

const ProductDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  console.log(product);

  return (
    <div className="product-container">
      <Link className="home-link" to="/">
        <h1>Home</h1>
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-details-container">
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <p className="title">{product.title}</p>
            <p>{product.description}</p>
            <p className="price">Price: {product.price}$</p>
            <p className="rating">Rating: {product.rating.rate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;