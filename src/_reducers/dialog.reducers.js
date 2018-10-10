//@flow

import update from "immutability-helper";
import { dialogConstants } from "../_constants";

export type DialogState = {
  open: boolean,
  title: string,
  content: string,
  button: string
};

const defaultState = {
  open: false,
  title: "Custom Title",
  content: "Custom Content",
  button: "Accept"
};

type Action = {
  type: string,
  payload: Object
};

const dialogReducers = (
  state: DialogState = defaultState,
  { type, payload }: Action
) => {
  switch (type) {
    case dialogConstants.SHOW_DIALOG_SUCCESS:
      return update(state, {
        open: { $apply: b => !b },
        title: { $set: payload.title },
        content: { $set: payload.content },
        button: { $set: payload.button }
      });
    default:
      return state;
  }
};

export default dialogReducers;
