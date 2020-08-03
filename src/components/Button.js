import React from "react";
import { Link } from "react-router-dom";
import { Button as Bt } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

const styleButtons = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}));

const Button = ({ icon, value, click }) => {
  let IconComponet = {
    component: null,
    color: "primary",
  };
  const classes = styleButtons();
  switch (icon) {
    case "delete":
      IconComponet.component = <DeleteIcon />;
      IconComponet.color = "secondary";
      break;
    case "add":
      IconComponet.component = <AddIcon />;
      break;
    case "edit":
      IconComponet.component = <SaveIcon />;
      break;
    case "cancel":
      IconComponet.component = <CancelIcon />;
      break;
    default:
      return null;
  }
  const renderCancelButton = () => (
    <Bt
      variant="contained"
      startIcon={IconComponet.component}
      to="/"
      component={Link}
      className={classes.root}
      onClick={click}
    >
      {value}
    </Bt>
  );
  const renderDefaultButton = () => (
    <Bt
      //type="submit"
      onClick={click}
      variant="contained"
      color={IconComponet.color}
      startIcon={IconComponet.component}
    >
      {value}
    </Bt>
  );

  if (icon === "cancel") {
    return renderCancelButton();
  }
  return renderDefaultButton();
};

export default Button;
