// extra features reducer
const initialState = {
  smsService: false,
  visaCard: false,
  onlineCard: false,
};
export const extraFeatures = (state = initialState, action) => {
  switch (action.type) {
    case "SMS_FEATURE":
      return { ...state, smsService: !state.smsService };
    case "VISA_CARD":
      return { ...state, visaCard: !state.visaCard };
    case "ONLINE_CARD":
      return { ...state, onlineCard: !state.onlineCard };

    default:
      return state;
  }
};
