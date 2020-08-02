import React from "react";
import { FormControl, Input, Grid, Box } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
import { BaseStyle } from "../style/globalStyle";
import Button from "../components/Button";

const DeletePage = () => {
  const classes = BaseStyle();

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
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.buttons}>
              <Button icon="delete" value="Delete User" />
              <Button icon="cancel" value="Cancel" to="/" />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default DeletePage;
