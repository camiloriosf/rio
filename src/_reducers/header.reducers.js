//@flow

import update from "immutability-helper";
import { headerConstants } from "../_constants";

export type HeaderState = {
  open: boolean
};

const defaultState = {
  open: false
};

type Action = {
  type: string,
  payload: Object
};

const headerReducers = (
  state: HeaderState = defaultState,
  { type, payload }: Action
) => {
  switch (type) {
    case headerConstants.OPEN_DRAWER_SUCCESS:
      return update(state, {
        open: { $set: true }
      });
    case headerConstants.CLOSE_DRAWER_SUCCESS:
      return update(state, {
        open: { $set: false }
      });
    default:
      return state;
  }
};

export default headerReducers;
