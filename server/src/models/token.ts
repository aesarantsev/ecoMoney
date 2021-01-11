import mongoose, { Document, Model, ObjectId } from 'mongoose'

const ObjectIdClass = mongoose.Schema.Types.ObjectId;

export interface IToken {
  _userId: ObjectId,
  token: string,
  createdAt: Date
}

interface ITokenBaseDocument extends IToken, Document {

}

interface ITokenDocument extends ITokenBaseDocument {

}

export interface ITokenModel extends Model<ITokenDocument> {
  
}

const tokenSchema = new mongoose.Schema({
  _userId: {
    type: ObjectIdClass,
    required: true,
    ref: "User",
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 },
});

export default mongoose.model<ITokenDocument, ITokenModel>("Token", tokenSchema);

