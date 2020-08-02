import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    width: "100%",
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(2),
    "& > .MuiIconButton-root": {
      backgroundColor: theme.palette.background.paper,
    },
  },
  list: {
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

const mockList = [
  {
    name: "Katlin",
  },
  {
    name: "Vedrana",
  },
  {
    name: "Yulia",
  },
  {
    name: "Katarina",
  },
  {
    name: "Lauren",
  },
];

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h4">My Team</Typography>
          <IconButton
            edge="start"
            aria-label="edit"
            color="primary"
            component={Link}
            to={"/add"}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <List className={classes.list}>
          {mockList.map(({ name }, index) => (
            <ListItem key={name + index} button>
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="start"
                  aria-label="edit"
                  color="primary"
                  component={Link}
                  to={"/edit"}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  color="secondary"
                  component={Link}
                  to={"/delete"}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default HomePage;
