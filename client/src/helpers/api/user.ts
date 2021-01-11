import axios from './index';
import { IUserLogin, IUserRegister } from '../../entities/user';

const postLogin = (user: IUserLogin) => axios.post("/auth/login", user);
const sendResetPasswordLink = (email: string) => axios.post("/auth/login/forgot", { email });
const resetPassword = (password: string, token: string) => axios.post(`/auth/login/reset/${token}`, { password });
const postLogout = () => axios.post("/auth/logout");
const postRegister = (user: IUserRegister) => axios.post("/auth/register", user);
const getConfirmation = (token: string) => axios.get(`/auth/confirmation/${token}`);
const resendConfirmation = (email: string) => axios.post("/auth/resend", { email });
const resetRegister = (email: string) => axios.post("/auth/register/reset", { email });
const getUser = () => axios.get("/user");

export {
  postLogin,
  sendResetPasswordLink,
  resetPassword,
  postLogout,
  postRegister,
  getConfirmation,
  resendConfirmation,
  getUser,
  resetRegister,
};