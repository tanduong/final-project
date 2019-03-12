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
    fetch("https://nordic-shop-api.herokuapp.com/", {
      credentials: "omit",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        variables: {},
        query: query
      }),
      method: "POST",
      mode: "cors"
    })
      .then(function(response) {
        dispatch({ type: "GET_PRODUCTS", payload: response.data });
      })
      .catch(function(err) {
        dispatch({ type: "GET_PRODUCTS_REJECTED", payload: err });
      });
  };
}
