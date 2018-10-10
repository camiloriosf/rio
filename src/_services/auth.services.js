//@flow
import { Auth } from "aws-amplify";

const loginUser = ({
  email,
  password
}: {
  email: string,
  password: string
}) => {
  try {
    return Auth.signIn(email, password);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const changePassword = async ({
  email,
  password,
  newPassword
}: {
  email: string,
  password: string,
  newPassword: string
}) => {
  try {
    const user = await Auth.signIn(email, password);
    return Auth.completeNewPassword(user, newPassword);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const checkUser = async () => {
  try {
    return Auth.currentAuthenticatedUser();
  } catch (error) {
    console("Error: ", error);
  }
};

const logout = async () => {
  try {
    return Auth.signOut();
  } catch (error) {
    console("Error: ", error);
  }
};

export const authServices = {
  loginUser,
  changePassword,
  checkUser,
  logout
};
