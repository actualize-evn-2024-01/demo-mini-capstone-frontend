/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img width="300px" src={product.primary_image} alt="" />
          <div>
            <button onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
          <div>
            <Link to={`/products/${product.id}`}>More info on separate page</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
