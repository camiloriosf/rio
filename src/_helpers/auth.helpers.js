//@flow
import isEmail from "isemail";
import { authTexts } from "../_constants";

const validateEmail = (email: string) =>
  !isEmail.validate(email) ? authTexts.EMAIL_INVALID : "";

const validatePassword = (password: string) => {
  if (password.trim() === "") return authTexts.PASSWORD_REQURED;
  if (password.trim().length < 8) return authTexts.PASSWORD_LENGTH;
  return "";
};

export const authHelpers = {
  validateEmail,
  validatePassword
};
