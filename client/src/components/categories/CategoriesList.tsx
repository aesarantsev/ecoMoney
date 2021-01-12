import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppStateType } from "../../entities";
import { getCategories } from "../../store/thunks/category";
import CategoryItem from './CategoryItem';
import CreateNewCategory from './CreateNewCategory';

interface ICategoriesList {
  
}

const CategoriesList: React.FC<ICategoriesList> = ({  }) => {
    const dispatch: any = useDispatch();
    
    const loadCategories = () => {
        dispatch(getCategories())
    }

    let categories = useSelector((state: AppStateType) => state.categories.categories);
    const categoriesJSX = categories.map(category => {
        return <CategoryItem category={category} key={category.title}/>
    })

    useEffect(() => loadCategories(), [])
  return (
    <React.Fragment>
        <CreateNewCategory/>
        {categoriesJSX}
    </React.Fragment>
  );
}

export default CategoriesList