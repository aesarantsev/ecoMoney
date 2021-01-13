import React from "react";

import { ICategory } from "../../entities/category";

interface ICategoryItem {
  category: ICategory
  onDelete: (categoryId: string) => void
}

const CategoryItem: React.FC<ICategoryItem> = ({ category, onDelete }) => {
	return (
		<React.Fragment>
			<div>
				<span>{category.title}</span>
				<button onClick={(e) => onDelete(category._id + "")}>Удалить</button>
			</div>
		</React.Fragment>
	);
};

export default CategoryItem