import { ICategory } from "../../entities/category";

export const SET_CATEGORIES = "SET_CATEGORIES";

export function setCategories(categories: Array<ICategory>) {
    return {
        type: SET_CATEGORIES,
        payload: categories
    };
}