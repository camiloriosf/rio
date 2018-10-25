//@flow

import { headerConstants } from "../_constants";

const openDrawer = () => {
  return async dispatch => {
    try {
      dispatch(request());
      dispatch(success());
    } catch (err) {
      dispatch(error(err));
    }
  };
  function request() {
    return { type: headerConstants.OPEN_DRAWER_REQUEST };
  }
  function success() {
    return {
      type: headerConstants.OPEN_DRAWER_SUCCESS
    };
  }
  function error(err) {
    return {
      type: headerConstants.OPEN_DRAWER_ERROR,
      payload: { error: err }
    };
  }
};

const closeDrawer = () => {
  return async dispatch => {
    try {
      dispatch(request());
      dispatch(success());
    } catch (err) {
      dispatch(error(err));
    }
  };
  function request() {
    return { type: headerConstants.CLOSE_DRAWER_REQUEST };
  }
  function success() {
    return {
      type: headerConstants.CLOSE_DRAWER_SUCCESS
    };
  }
  function error(err) {
    return {
      type: headerConstants.CLOSE_DRAWER_ERROR,
      payload: { error: err }
    };
  }
};

export const headerActions = {
  openDrawer,
  closeDrawer
};
