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
      console.log(res);
    });
  };
  render() {
    return (
      <div className={classes.Product}>
        <Header total={3} />
        <Main>
          <Product img={null} name="ABC" price={30000} />
          <Product img={null} name="ABC" price={30000} />
          <Product img={null} name="ABC" price={30000} />
          <Product img={null} name="ABC" price={30000} />
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
