import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormControl, Input, Grid, Box } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import { BaseStyle } from "../style/globalStyle";
import { GlobalContext } from "../context/GlobalProvider";

const EditPage = () => {
  const classes = BaseStyle();
  const { users, editUser } = useContext(GlobalContext);
  const { id } = useParams();
  const currentItem = users.find((user) => user.id === +id);
  const history = useHistory();
  const [name, setName] = useState("");
  const handleClick = () => {
    console.log("name", name);
   editUser({ id: currentItem.id, name });
    history.push("/");
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Subtitle value="Edit User" />
      <FormControl>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Input
              id="my-input"
              placeholder="Katlin Petimko"
              aria-describedby="my-helper-text"
              defaultValue={currentItem.name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.buttons}>
              <Button icon="edit" value="Edit User" click={handleClick} />
              <Button icon="cancel" value="Cancel" to="/" />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default EditPage;
