import {createStore} from 'redux';

export default function configureStore(reducers, initialState = {}) {
  return createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
