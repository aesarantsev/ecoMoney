import Category from '../models/category';

const defaultCategories = [
    { title: 'Продукты' },
    { title: 'Алкоголь и табак' },
    { title: 'Дом' },
    { title: 'Транспорт' },
    { title: 'Рестораны и кафе' },
    { title: 'Подарки' },
    { title: 'Развлечения' },
    { title: 'Техника' },
    { title: 'Питомцы' },
]

export const createDefaultCategories = (userId: string) => {
    defaultCategories.map(category => {
        const newCategory = new Category({ title: category.title, userId})
        newCategory.save();
    })
}