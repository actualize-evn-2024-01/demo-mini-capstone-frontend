import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleProductsShow = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log("handleProductsShow", response);
      setProduct(response.data);
    });
  };

  useEffect(handleProductsShow, []);

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="/products">Back to all products</Link>
    </div>
  );
}
