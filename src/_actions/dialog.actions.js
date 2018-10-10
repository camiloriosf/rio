//@flow

import { dialogConstants } from "../_constants";

const showDialog = ({
  title = "",
  content = "",
  button = "Accept"
}: {
  title: string,
  content: string,
  button: string
}) => {
  return async dispatch => {
    try {
      dispatch(request());
      dispatch(success({ title, content, button }));
    } catch (err) {
      dispatch(error(err));
    }
  };
  function request() {
    return { type: dialogConstants.SHOW_DIALOG_REQUEST };
  }
  function success({ title, content, button }) {
    return {
      type: dialogConstants.SHOW_DIALOG_SUCCESS,
      payload: { title, content, button }
    };
  }
  function error(err) {
    return {
      type: dialogConstants.SHOW_DIALOG_ERROR,
      payload: { error: err }
    };
  }
};

export const dialogActions = {
  showDialog
};
