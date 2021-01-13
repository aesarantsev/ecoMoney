import { Dispatch } from 'redux'

import { ICreateCategory } from '../../entities/category'
import { createCategoryQuery, getCategoriesQuery, removeCategoryQuery } from '../../helpers/api/category'
import { setCategories } from '../actions/category'

export const createNewCategory = ({ title }: ICreateCategory) => async (dispatch: Dispatch) => {
    await createCategoryQuery({title})
        .then(res => {
            dispatch(setCategories(res.data))
        })
}

export const removeCategory = (categoryId: string) => async (dispatch: Dispatch) => {
    await removeCategoryQuery(categoryId)
        .then(res => {
            dispatch(setCategories(res.data))
        })
}

export const getCategories = () => async (dispatch: Dispatch) => {
    await getCategoriesQuery()
        .then(res => {
            dispatch(setCategories(res.data))
        })
}