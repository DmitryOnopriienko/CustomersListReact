import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import customersActions from "../actions/customersActions";
import CustomersTable from "../../../components/CustomersTable";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import * as PAGES from "../../../constants/pages";

function Customers() {
  const customers = useSelector(({customers}) => customers);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() =>
      dispatch(customersActions.fetchCustomers()), []);

  return (
      <div>
        {customers.isLoading &&
            (
                <div>Loading...</div>
            )
        }
        <CustomersTable
            customers={customers.list}
            dispatch={dispatch}
        />
        <hr/>
        <Button
          variant="contained"
          onClick={() =>
              history.push(`/${PAGES.ADD_EDIT_CUSTOMER}`)
          }
        >
          Add new customer
        </Button>
      </div>
  );
}

export default Customers;