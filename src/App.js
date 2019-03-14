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

class App extends Component {
  render() {
    const {hello, sayHello} = this.props;
    console.log('hello', hello, 'expect to see world');
    sayHello();
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
  sayHello: () => dispatch({type: 'SAY_HELLO'}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
