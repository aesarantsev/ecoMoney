export interface IUserLogin {}
export interface IUserRegister {}

export interface IUser {
    username: string
}
export type IUserState = Readonly<{
    isAuth: boolean,
    user: IUser
}>;


