import React from 'react'
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    "& > li": {
      borderBottom: "solid 1px" + theme.palette.primary.light,
      "&:last-child": {
        borderBottom: "0",
      },
    },
  },
}));

const ListItems = ({list}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {list.map(({ name, id }, index) => (
        <ListItem key={id}>
          <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <IconButton
              edge="start"
              aria-label="edit"
              color="primary"
              component={Link}
              to={`/edit/${id}`}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              color="secondary"
              component={Link}
              to={`/delete/${id}`}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default ListItems
