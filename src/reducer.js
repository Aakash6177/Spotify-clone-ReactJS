export const initalState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  // action got despatched, type of the action was user and the payload of the action was user
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user, // this is going to set the new state of the data layer
      };
    default:
      return state;
  }
};

export default reducer;
