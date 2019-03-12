import * as Types from "../constants/ActionTypes";

var initialState = [];

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
  }
  return state;
}
