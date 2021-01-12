export interface ICategory {
    title: string,
    _id?: string
}

export interface ICreateCategory extends ICategory {
    
}

export interface ICategoriesState {
    categories: Array<ICategory>
}
