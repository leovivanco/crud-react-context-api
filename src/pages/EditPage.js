import React from "react";
import { FormControl, Input, Grid, Box } from "@material-ui/core";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import { BaseStyle } from "../style/globalStyle";

const EditPage = () => {
  const classes = BaseStyle();

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
            />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.buttons}>
              <Button icon="edit" value="Edit User" />
              <Button icon="cancel" value="Cancel" to="/" />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default EditPage;
