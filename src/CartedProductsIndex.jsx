/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);
  const navigate = useNavigate();

  const handleCartedProductsIndex = () => {
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log("handleCartedProductsIndex", response);
      setCartedProducts(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/orders.json").then((response) => {
      console.log(response);
      navigate(`/orders`);
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

      <form onSubmit={handleSubmit}>
        <button type="submit">Buy now</button>
      </form>
    </div>
  );
}
