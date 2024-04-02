import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleProductsShow = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log("handleProductsShow", response);
      setProduct(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/carted_products.json", params).then((response) => {
      console.log(response);
      navigate("/carted_products");
    });
  };

  useEffect(handleProductsShow, []);

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <form onSubmit={handleSubmit}>
        <input name="product_id" value={product.id} type="hidden" />
        <div>
          Quantity: <input name="quantity" type="number" />
        </div>
        <button type="submit">Add to cart</button>
      </form>
      <Link to="/products">Back to all products</Link>
    </div>
  );
}
