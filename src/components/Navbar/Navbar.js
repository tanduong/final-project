import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className={classes.Navbar}>
        <ul>
          <li>
            <Link to="/">LOGO</Link>
          </li>
          <li style={{ marginLeft: "auto" }}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
