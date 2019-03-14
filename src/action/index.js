import * as Types from '../constants/ActionTypes';

export const fetchProductSuccess = (products) => {
  return {
    type: Types.FETCH_PRODUCT_SUCCESS,
    products,
  };
};

// GET A PRODUCT
const query = `query products {
  products {
    id
    name
    description
    rating
    price
    images {
      url
      alt
    }
  }
}`;

export function getProducts() {
  return function(dispatch) {
    fetch('https://nordic-shop-api.herokuapp.com/', {
      credentials: 'omit',
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        variables: {},
        query: query,
      }),
      method: 'POST',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then(function(response) {
        dispatch(fetchProductSuccess(response.data.products));
      })
      .catch(function(err) {
        // dispatch({type: 'GET_PRODUCTS_REJECTED', payload: err});
      });
  };
}
