import React, { Component } from "react";
import classes from "./Product.module.css";
class Product extends Component {
  render() {
    return (
      <div className={classes.Product}>
        <img src={this.props.img} />
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
        <input type="button" value="Add" />
      </div>
    );
  }
}
export default Product;
