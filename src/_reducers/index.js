import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import dialogReducers from "./dialog.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  dialog: dialogReducers
});

export default rootReducer;
