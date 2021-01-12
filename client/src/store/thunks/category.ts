import { Dispatch } from 'redux'

import { ICreateCategory } from '../../entities/category'
import { createCategory, getCategories as fetchCategories } from '../../helpers/api/category'
import { setCategories } from '../actions/category'

export const createNewCategory = ({ title }: ICreateCategory) => async (dispatch: Dispatch) => {
    await createCategory({title})
        .then(res => {
            console.log(res.data.categories)
            dispatch(setCategories(res.data))
        })
        .catch()
}

export const getCategories = () => async (dispatch: Dispatch) => {
    await fetchCategories()
        .then(res => {
            dispatch(setCategories(res.data))
        })
}