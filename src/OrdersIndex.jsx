/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function OrdersIndex() {
  const [orders, setOrders] = useState([]);

  const handleOrdersIndex = () => {
    axios.get("/orders.json").then((response) => {
      console.log("handleOrdersIndex", response);
      setOrders(response.data);
    });
  };

  useEffect(handleOrdersIndex, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order #{order.id}</h2>
          {order.carted_products.map((carted_product) => (
            <div key={carted_product.id}>
              {carted_product.quantity} x {carted_product.product.name}
            </div>
          ))}
          <hr />
          <p>Subtotal: {order.subtotal}</p>
          <p>Tax: {order.tax}</p>
          <p>Total: {order.total}</p>
        </div>
      ))}
    </div>
  );
}
