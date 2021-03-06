import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const StyledGlobalDiv = withStyles({
  root: {
    maxWidth: 760,
    padding: "1rem",
    margin: "2rem auto",
  },
})(Box);

function App() {
  return (
    <StyledGlobalDiv>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddPage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/delete/:id" component={DeletePage} />
          </Switch>
        </Router>
      </GlobalProvider>
    </StyledGlobalDiv>
  );
}

export default App;
