/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const handleCartedProductsIndex = () => {
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log("handleCartedProductsIndex", response);
      setCartedProducts(response.data);
    });
  };

  useEffect(handleCartedProductsIndex, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <h2>{cartedProduct.product.name}</h2>
          <p>Quantity: {cartedProduct.quantity}</p>
          <p>Price: {cartedProduct.product.price}</p>
        </div>
      ))}
      <div>
        <Link to={`/products`}>Continue shopping</Link>
      </div>
    </div>
  );
}
