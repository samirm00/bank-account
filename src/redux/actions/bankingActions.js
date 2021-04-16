// banking actions creator

export const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: "WITHDRAW",
    amount: amount,
  };
};

export const collectInterest = () => {
  return {
    type: "COLLECT_INTEREST",
  };
};

export const deleteAccount = () => {
  return {
    type: "DELETE_ACCOUNT",
  };
};

export const toggleAccount = () => {
  return {
    type: "TOGGLE_ACCOUNT",
  };
};
