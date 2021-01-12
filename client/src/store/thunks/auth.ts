import { push } from "connected-react-router";
import {Dispatch} from 'redux'

import { login, logout } from "../actions/user";
import {
  postRegister,
  postLogin,
  postLogout,
  getConfirmation,
  resendConfirmation,
  resetRegister,
  sendResetPasswordLink,
  resetPassword,
} from "../../helpers/api/user";
import { IUserLogin, IUserRegister } from "../../entities/user";

export const attemptLogin = (user: IUserLogin) => async (dispatch: Dispatch) => {
  await postLogin(user)
    .then((res) => {
      dispatch(login(res.data.user));
      dispatch(push("/home"));
      return res.data; 
    })
    .catch(dispatch(push("/login") as any));
};

export const attemptSendResetPasswordLink = (email: string) => async (dispatch: Dispatch) => {
  await sendResetPasswordLink(email).catch(e => dispatch(push("/login/forgot")));
};

export const attemptResetPassword = (password: string, token: string) => async (dispatch: Dispatch) => {
  await resetPassword(password, token)
    .then(() => {
      dispatch(push("/login"));
    })
    .catch(dispatch(push(`/login/reset/${token}`)) as any);
};

export const attemptLogout = () => async (dispatch: Dispatch) =>
  await postLogout()
    .then(() => {
      dispatch(logout());
      dispatch(push("/login"));
    })
    .catch(dispatch(push("/login")) as any);

export const attemptRegister = (newUser: IUserRegister) => async (dispatch: Dispatch) => {
  await postRegister(newUser).catch(dispatch(push("/register")) as any);
};

export const attemptGetConfirmation = (token: string) => async (dispatch: Dispatch) =>
  await getConfirmation(token).then(() => {
    dispatch(push("/login"));
  });

export const attemptResendConfirmation = (email: string) => async (dispatch: Dispatch) =>
  await resendConfirmation(email).catch(dispatch(push("/register")) as any);

export const attemptResetRegister = (email: string) => async (dispatch: Dispatch) => {
  await resetRegister(email).catch(dispatch(push("/register")) as any);
};
