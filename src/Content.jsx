import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log("handleProductsIndex", response);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <Signup />
      <Login />
      <ProductsIndex products={products} />
    </main>
  );
}
