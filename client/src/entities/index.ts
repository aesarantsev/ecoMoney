import { ICategoriesState } from "./category";
import { IUserState } from "./user";

export type AppStateType = Readonly<{
    router: any,
    user: IUserState,
    categories: ICategoriesState
}>