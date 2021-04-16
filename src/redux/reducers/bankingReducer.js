/*
Reducers are just function return the new state according to the action type
 */

const initialState = {
  amount: 0,
  savingAccount: false,
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, amount: state.amount + action.amount };

    case "WITHDRAW":
      return { ...state, amount: state.amount - action.amount };

    case "COLLECT_INTEREST":
      return { ...state, amount: state.amount * 1.03 };

    case "DELETE_ACCOUNT":
      return { ...state, amount: 0 };
    case "TOGGLE_ACCOUNT":
      return { ...state, savingAccount: !state.savingAccount };

    default:
      return state;
  }
};
