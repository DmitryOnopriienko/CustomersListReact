import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import config from "config/configExample";
import customersActions from "../../pages/Customers/actions/customersActions";
import {useHistory} from "react-router-dom";
import * as PAGES from "../../constants/pages";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CustomersTable = (props) => {
  const classes = useStyles();
  const {
    customers,
    dispatch,
  } = props;
  const history = useHistory();

  const deleteCustomer = (elem) => {
    const id = elem.currentTarget.id;
    fetch(config.BASE_URL + "/customers/" + id, {method: "DELETE"})
        .then(() => dispatch(customersActions.fetchCustomers()));
  };

  const handleRedirect = (elem) => {
    const id = elem.currentTarget.id;
    history.push(`/${PAGES.ADD_EDIT_CUSTOMER}/${id}`);

    // history.push(`/${PAGES.ADD_EDIT_CUSTOMER}`, { // for impl with useLocation()
    //   id: id,
    // });
  };

  return (
      <TableContainer component={Paper}>
        <Table
            className={classes.table}
            size="small"
            aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell align="right">{customer.id}</TableCell>
                  <TableCell align="right">{customer.name}</TableCell>
                  <TableCell align="right">{customer.surname}</TableCell>
                  <TableCell align="right">
                    <Button
                        variant="contained"
                        id={customer.id}
                        onClick={deleteCustomer}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                        variant="contained"
                        id={customer.id}
                        onClick={handleRedirect}
                    >
                      Change
                    </Button>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default CustomersTable;