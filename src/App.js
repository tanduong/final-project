import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./containers/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./containers/pages/Products/Product";
import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/pages/Checkout/Checkout";
import Cart from "./containers/pages/Cart/Cart";
class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
    );
  }
}

export default App;
