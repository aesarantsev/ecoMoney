import express, { Request, Response } from 'express';

import Category from '../models/category';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    const categoryCandidat = await Category.find({ title: req.body.title, userId: req.user?._id}).lean();
    if (!categoryCandidat.length){
        const category = new Category({ ...req.body, userId: req.user?._id })
        await category.save();

        const userCategories = await Category.find({ userId: req.user?._id }).lean();
        res.status(200).send({ message: "Категория создана", categories: userCategories});
    }
    else {
        res.status(400).send({ message: "Такая категория уже есть" });
    }

})

router.post('/remove', async (req: Request, res: Response) => { 
    const removedCategory = await Category.findByIdAndDelete(req.body.categoryId);
    const userCategories = await Category.find({ userId: req.user?._id }).lean();

    res.status(200).send({ message: "Категория удалена", categories: userCategories });
})

router.get('/getCategories', async (req: Request, res: Response) => {
    const categories = await Category.find({ userId: req.user?._id}).lean();
    res.status(200).send({ categories });
})

export default router;