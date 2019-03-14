import * as Types from '../constants/ActionTypes';

var initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
}
