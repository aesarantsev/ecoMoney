import axios from './index';
import { ICreateCategory } from '../../entities/category';

const createCategory = (category: ICreateCategory) => axios.post("/category/create", category);
const getCategories = () => axios.get("/category/getCategories");

export {
    createCategory,
    getCategories
}