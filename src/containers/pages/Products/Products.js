import React, { Component } from "react";
import classes from "./Products.module.css";
import Header from "../../../components/Header/Header";
import Main from "../../../components/Main/Main";
import Product from "./Product/Product";
import * as Query from "../../../constants/Querry";
import callApi from "../../../utils/apiCaller";
// import { connect } from "react-redux";
// import { getProducts } from "../../../action/action";

class Products extends Component {
  componentDidMount = () => {
    callApi("POST", Query.productsQuery).then(res => {
      console.log(res.data.data.products);
      this.setState({
        products: res.data.data.products
      });
    });
  };
  state = {
    products: []
  };

  render() {
    var products = this.state.products;
    return (
      <div className={classes.Product}>
        <Header total={3} />
        <Main>
          {products.map(product => {
            return (
              <Product
                img={product.images[0].url}
                name={product}
                price={30000}
                alt={product.alt}
                key={product.id}
              />
            );
          })}
        </Main>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.products
// });

// const mapDispatchToProps = {
//   getProducts
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Products);

export default Products;
