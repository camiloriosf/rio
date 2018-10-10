//@flow

import { authConstants } from "../_constants";
import { authServices } from "../_services";
import { dialogActions } from "./";

const changeAuthField = ({ name, value }: { name: string, value: string }) => {
  return async dispatch => {
    try {
      dispatch(request());
      //   const barras = await barrasService.getBarras();
      dispatch(success({ name, value }));
    } catch (err) {
      dispatch(error(err));
    }
  };
  function request() {
    return { type: authConstants.CHANGE_AUTH_FIELD_REQUEST };
  }
  function success({ name, value }) {
    return {
      type: authConstants.CHANGE_AUTH_FIELD_SUCCESS,
      payload: { name, value }
    };
  }
  function error(err) {
    return {
      type: authConstants.CHANGE_AUTH_FIELD_ERROR,
      payload: { error: err }
    };
  }
};

const loginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch(request());
      const response = await authServices.loginUser({ email, password });
      const { challengeName = "" } = response;
      if (challengeName === "NEW_PASSWORD_REQUIRED") {
        dispatch(
          dialogActions.showDialog({
            title: "Reset Password",
            content: "You need to reset your password in order to sign in"
          })
        );
        dispatch(success({ reset: true, authenticated: false }));
      } else {
        dispatch(success({ reset: false, authenticated: true }));
      }
    } catch (err) {
      dispatch(error(err));
      const { message = "There was an unknown error" } = err;
      dispatch(dialogActions.showDialog({ title: "Error", content: message }));
    }
  };
  function request() {
    return { type: authConstants.LOG_IN_USER_REQUEST };
  }
  function success({ reset, authenticated }) {
    return {
      type: authConstants.LOG_IN_USER_SUCCESS,
      payload: { reset, authenticated }
    };
  }
  function error(err) {
    return { type: authConstants.LOG_IN_USER_ERROR, payload: { error: err } };
  }
};

const changePassword = ({ email, password, newPassword }) => {
  return async dispatch => {
    try {
      dispatch(request());
      await authServices.changePassword({
        email,
        password,
        newPassword
      });
      dispatch(success());
      dispatch(
        dialogActions.showDialog({
          title: "Password Changed",
          content: "Your password has been succesfully updated, please log in"
        })
      );
    } catch (err) {
      dispatch(error(err));
      const { message = "There was an unknown error" } = err;
      dispatch(dialogActions.showDialog({ title: "Error", content: message }));
    }
  };
  function request() {
    return { type: authConstants.CHANGE_PASSWORD_REQUEST };
  }
  function success() {
    return {
      type: authConstants.CHANGE_PASSWORD_SUCCESS
    };
  }
  function error(err) {
    return {
      type: authConstants.CHANGE_PASSWORD_ERROR,
      payload: { error: err }
    };
  }
};

const checkUser = () => {
  return async dispatch => {
    try {
      dispatch(request());
      await authServices.checkUser();
      dispatch(success());
    } catch (err) {
      dispatch(error(err));
    }
  };
  function request() {
    return { type: authConstants.CHECK_USER_REQUEST };
  }
  function success() {
    return {
      type: authConstants.CHECK_USER_SUCCESS
    };
  }
  function error(err) {
    return {
      type: authConstants.CHECK_USER_ERROR,
      payload: { error: err }
    };
  }
};

const logoutUser = () => {
  return async dispatch => {
    try {
      dispatch(request());
      await authServices.logout();
      dispatch(success());
    } catch (err) {
      dispatch(error(err));
      const { message = "There was an unknown error" } = err;
      dispatch(dialogActions.showDialog({ title: "Error", content: message }));
    }
  };
  function request() {
    return { type: authConstants.LOG_OUT_USER_REQUEST };
  }
  function success() {
    return {
      type: authConstants.LOG_OUT_USER_SUCCESS
    };
  }
  function error(err) {
    return {
      type: authConstants.LOG_OUT_USER_ERROR,
      payload: { error: err }
    };
  }
};

export const authActions = {
  changeAuthField,
  loginUser,
  changePassword,
  checkUser,
  logoutUser
};
