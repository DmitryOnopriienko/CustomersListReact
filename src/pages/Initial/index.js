import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import withAuthorities from 'decorators/withAuthorities';
import Initial from './containers/Initial';
import reducer from './reducers/reducer';
import customers from "../Customers/reducers/customersReducer";

const rootReducer = combineReducers({
  reducer,
  customers,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

export default withAuthorities(props => (
  <Provider store={store}>
    <Initial {...props} />
  </Provider>
));
