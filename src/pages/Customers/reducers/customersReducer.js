import {
  ERROR_RECEIVE_CUSTOMERS,
  RECEIVE_CUSTOMERS,
  REQUEST_CUSTOMERS
} from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  list: [],
  name: "Customers",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_RECEIVE_CUSTOMERS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case REQUEST_CUSTOMERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RECEIVE_CUSTOMERS: {
      const {
        customers
      } = action;
      return {
        ...state,
        isLoading: false,
        list: customers,
      };
    }
    default: return state;
  }
}
