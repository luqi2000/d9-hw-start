const initialState = {
  favorites: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {};

    default:
      return state;
  }
};

export default mainReducer;
