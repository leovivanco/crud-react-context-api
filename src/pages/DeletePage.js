import React, { useContext  } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormControl, Input, Grid, Box } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
import { BaseStyle } from "../style/globalStyle";
import Button from "../components/Button";
import {GlobalContext} from "../context/GlobalProvider"

const DeletePage = () => {
  const classes = BaseStyle();
  const { users, removeUser } = useContext(GlobalContext);
  const { id } = useParams();
  const history = useHistory();
  const itemToDelete = users.find((user) => user.id === +id);

  const handleDelete = () => {
    removeUser(itemToDelete.id);
    history.push("/");
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Subtitle value="Delete User" />
      <FormControl>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Input
              id="my-input"
              placeholder="Katlin Petimko"
              aria-describedby="my-helper-text"
              defaultValue={itemToDelete.name}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.buttons}>
              <Button icon="delete" value="Delete User" click={handleDelete} />
              <Button icon="cancel" value="Cancel" to="/" />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default DeletePage;
