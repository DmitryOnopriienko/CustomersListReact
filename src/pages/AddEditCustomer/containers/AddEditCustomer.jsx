import React, {useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import config from "../../../config/configExample";
import {useHistory, useLocation, useParams} from "react-router-dom";
import * as PAGES from "../../../constants/pages";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
    }
  },
}));

function AddEditCustomer() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const history = useHistory();
  const {id} = useParams();

  // const { state } = useLocation(); // version to implement using useLocation() hook
  // console.log("state useLocation(): " + state);
  // console.log(state.id);

  useEffect(() => {
    if (id) {
      fetch(config.BASE_URL + "/customers/" + id)
          .then(customer => customer.json())
          .then(customer => {
            setName(customer.name);
            setSurname(customer.surname);
            console.log(name + " " + surname);
          })
          .catch(error => console.log(error));
    }
  }, []);

  const handleSave = () => {
    const body = {
      name: name,
      surname: surname,
    };

    if (id) {
      return fetch(config.BASE_URL + "/customers/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => history.push(`/${PAGES.CUSTOMERS}`));
    } else {
      return fetch(config.BASE_URL + "/customers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => history.push(`/${PAGES.CUSTOMERS}`));
    }
  }

  return (
    <div>
      <form
          className={classes.root}
          noValidate
          autoComplete="off"
      >
        <div>
          <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              placeholder="Name"
              value={name}
              onChange={(el) => setName(el.target.value)}
          />
        </div>
        <div>
          <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              placeholder="Surname"
              value={surname}
              onChange={(el) => setSurname(el.target.value)}
          />
        </div>
        <div>
          <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
          >
            SAVE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddEditCustomer;