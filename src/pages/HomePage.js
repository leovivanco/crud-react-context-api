import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton, Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../context/GlobalProvider";
import ListItems from "../components/ListItems";

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
}));

const HomePage = () => {
  const { users } = useContext(GlobalContext);
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
        <ListItems list={users} />
        {users.length < 1 && (
          <Typography align="center" variant="h4">
            No Users
          </Typography>
        )}
      </Box>
    </>
  );
};

export default HomePage;
