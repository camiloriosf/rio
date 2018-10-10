//@flow

import update from "immutability-helper";
import { authConstants } from "../_constants";

type ErrorState = {
  code: string,
  message: string,
  name: string
};

export type AuthState = {
  authenticated: boolean,
  checked: boolean,
  email: string,
  password: string,
  newPassword: string,
  loading: boolean,
  reset: boolean,
  error: ErrorState
};

const defaultState = {
  authenticated: false,
  checked: false,
  email: "",
  password: "",
  newPassword: "",
  loading: false,
  reset: false,
  error: {
    code: "",
    message: "",
    name: ""
  }
};

type Action = {
  type: string,
  payload: Object
};

const authReducers = (
  state: AuthState = defaultState,
  { type, payload }: Action
) => {
  switch (type) {
    case authConstants.CHANGE_AUTH_FIELD_SUCCESS:
      return update(state, {
        [payload.name]: { $set: payload.value }
      });
    case authConstants.LOG_IN_USER_REQUEST:
      return update(state, {
        loading: { $set: true },
        checked: { $set: false }
      });
    case authConstants.LOG_IN_USER_SUCCESS:
      return update(state, {
        loading: { $set: false },
        reset: { $set: payload.reset },
        authenticated: { $set: payload.authenticated },
        email: { $apply: b => (payload.authenticated ? "" : b) },
        password: { $apply: b => (payload.authenticated ? "" : b) },
        newPassword: { $apply: b => (payload.authenticated ? "" : b) },
        checked: { $apply: b => (payload.authenticated ? true : false) }
      });
    case authConstants.LOG_IN_USER_ERROR:
      return update(state, {
        error: { $set: payload.error },
        loading: { $set: false },
        checked: { $set: false }
      });
    case authConstants.CHANGE_PASSWORD_REQUEST:
      return update(state, {
        loading: { $set: true }
      });
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return update(state, {
        loading: { $set: false },
        reset: { $set: false },
        password: { $set: "" },
        newPassword: { $set: "" }
      });
    case authConstants.CHANGE_PASSWORD_ERROR:
      return update(state, {
        loading: { $set: false }
      });
    case authConstants.CHECK_USER_SUCCESS:
      return update(state, {
        authenticated: { $set: true },
        checked: { $set: true }
      });
    case authConstants.CHECK_USER_ERROR:
      return update(state, {
        authenticated: { $set: false },
        checked: { $set: true }
      });
    case authConstants.LOG_OUT_USER_SUCCESS:
      return update(state, {
        authenticated: { $set: false }
      });
    default:
      return state;
  }
};

export default authReducers;
