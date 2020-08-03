import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  users: [
    {
      id: 1,
      name: "Katlin",
    },
    {
      id: 2,
      name: "Vedrana",
    },
    {
      id: 3,
      name: "Yulia",
    },
    {
      id: 4,
      name: "Katarina",
    },
    {
      id: 5,
      name: "Lauren",
    },
  ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, editUser, addUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
