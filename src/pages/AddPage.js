import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, Input, Grid, Box } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import { BaseStyle } from "../style/globalStyle";
import { GlobalContext } from "../context/GlobalProvider";
import { v4 as uuidv4 } from "uuid";

const AddPage = () => {
  const classes = BaseStyle();
  const { users, addUser } = useContext(GlobalContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const handleClick = () => {
    addUser({ id: uuidv4(users.length), name });
    history.push("/");
  };

  return (
    <form
      onSubmit={handleClick}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Subtitle value="Add New User" />
      <FormControl>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Input
              id="my-input"
              placeholder="Katy Garcia"
              aria-describedby="my-helper-text"
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.buttons}>
              <Button
                type="submit"
                icon="add"
                value="Add New User"
                click={handleClick}
              />
              <Button icon="cancel" value="Cancel" to="/" />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default AddPage;
