import * as ACTION_TYPES from "../constants/actionTypes";

const requestCustomers = () => ({
  type: ACTION_TYPES.REQUEST_CUSTOMERS,
});

const receiveCustomers = (customers) => ({
  customers,
  type: ACTION_TYPES.RECEIVE_CUSTOMERS,
});

const errorReceiveCustomers = () => ({
  type: ACTION_TYPES.ERROR_RECEIVE_CUSTOMERS,
});

const getCustomers = () => {
  return fetch("http://localhost:8080/customers/all");
}

const fetchCustomers = () => (dispatch) => {
  dispatch(requestCustomers());
  return getCustomers()
      .then(customers => customers.json())
      .then(customers => dispatch(receiveCustomers(customers)))
      .catch(() => dispatch(errorReceiveCustomers()));
}

export default {
  fetchCustomers,
};