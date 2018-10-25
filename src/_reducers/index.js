import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import dialogReducers from "./dialog.reducers";
import headerReducers from "./header.reducers";

const rootReducer = combineReducers({
  auth: authReducers,
  dialog: dialogReducers,
  header: headerReducers
});

export default rootReducer;
