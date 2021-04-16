// all reducers combined

import { bankingReducer } from "./bankingReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  banking: bankingReducer,
  auth: authReducer,
});

export default allReducers;
