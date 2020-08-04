export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((users) => {
          return users.id !== action.payload;
        }),
      };
    case "EDIT_USER":
      const updateUser = action.payload;
      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });

      return {
        ...state,
        users: updateUsers,
      };
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
