import mongoose, { Document, ObjectId } from 'mongoose'

interface ISubcategory {
    _id: ObjectId,
    title: string
}

export interface ICategory extends Document {
    title: string,
    userId: string,
    subcategories: Array<ISubcategory>
}

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    subcategories: {
        type: Array,
        required: false
    }
})

export default mongoose.model<ICategory>("Category", categorySchema);