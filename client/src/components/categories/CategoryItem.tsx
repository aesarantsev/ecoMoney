import React from "react";

import { ICategory } from "../../entities/category";

interface ICategoryItem {
  category: ICategory
}

const CategoryItem: React.FC<ICategoryItem> = ({ category }) => {
  return (
    <React.Fragment>
        <div>
            {category.title}
        </div>
        
    </React.Fragment>
  );
}

export default CategoryItem