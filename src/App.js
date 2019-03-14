import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './containers/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './containers/pages/Products/Products';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/pages/Checkout/Checkout';
import Cart from './containers/pages/Cart/Cart';
import {connect} from 'react-redux';
import {getProducts} from './action/index';

class App extends Component {
  componentDidMount() {
    const {getProducts1} = this.props;
    getProducts1();
  }
  render() {
    const {hello} = this.props;
    console.log('hello', hello, 'expect to see world');
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

const mapStateToProps = (state) => ({
  hello: 'world',
});

const mapDispatchToProps = (dispatch) => ({
  getProducts1: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
