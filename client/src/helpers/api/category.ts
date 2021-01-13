import axios from './index';
import { ICreateCategory } from '../../entities/category';

const createCategoryQuery = (category: ICreateCategory) => axios.post("/category/create", category);
const getCategoriesQuery = () => axios.get("/category/getCategories");
const removeCategoryQuery = (categoryId: string) => axios.post("/category/remove", { categoryId });

export {
    createCategoryQuery,
    getCategoriesQuery,
    removeCategoryQuery
}