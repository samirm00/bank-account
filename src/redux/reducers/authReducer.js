// Auth reducers

const initialState = {
  isLogged: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return { ...state, isLogged: !state.isLogged };
    default:
      return state;
  }
};
