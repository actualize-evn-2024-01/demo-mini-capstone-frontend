import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">All products</Link> |{" "}
        <Link to="/products/new">New product</Link> | <Link to="/carted_products">Shopping Cart</Link> |{" "}
        <Link to="/orders">Orders</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> |{" "}
        <LogoutLink />
      </nav>
    </header>
  );
}
