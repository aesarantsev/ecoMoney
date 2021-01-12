import { ICategoriesState } from '../../entities/category';
import { SET_CATEGORIES } from '../actions/category';

const initialState: ICategoriesState = {
    categories: []
};

export default function categories(state: ICategoriesState = initialState, action: any): ICategoriesState {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories
            }
        default:
            return state;
    }
}