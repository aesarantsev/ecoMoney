import Joi from 'joi'
import bcrypt from 'bcryptjs'
import moment from 'moment'
import mongoose, { Document, Model, model, Types, Schema, Query } from 'mongoose'
import R from 'ramda'

moment().format();

export interface IUser extends Document {
  username: string,
  email: string,
  password: string,
  passwordResetToken?: string,
  passwordResetExpires?: any,
  isVerified: boolean,
  isAdmin: boolean,
  expires?: Date | null,
  hidePassword: () => any,
  hashPassword: () => Promise<any>

}

// interface IUserBaseDocument extends IUser, Document {
//   hidePassword: () => any
//   hashPassword: () => Promise<any>
//   // friends: Types.Array<string>;
//   // creditCards?: Types.Map<string>;
//   // fullName: string;
//   // getGender(): string;
// }

// export interface IUserDocument extends IUserBaseDocument {

// }

// export interface IUserModel extends Model<IUserDocument> {
//   // findMyCompany(id: string): Promise<UserPopulatedDocument>
// }

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  passwordResetToken: { type: String, default: "" },
  passwordResetExpires: { type: Date, default: moment().utcOffset(0) },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  expires: { type: Date, default: moment().utcOffset(0), expires: 43200 },
});

userSchema.methods.validPassword = function (password: string) {
  return bcrypt.compareSync(password, this.password.toString());
};

userSchema.methods.hashPassword = function (this: IUser) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err1, salt) => {
      if (err1) {
        reject(err1);
      }
      bcrypt.hash(this.password.toString(), salt, (err2, hash) => {
        if (err2) {
          reject(err2);
        }
        this.password = hash;
        resolve(hash);
      });
    });
  });
};

userSchema.methods.hidePassword = function () {
  return R.omit(["password", "__v", "_id"], this.toObject({ virtuals: true }));
};




export function validateUser(user: any) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    isAdmin: Joi.boolean().required(),
  });

  return schema.validate(user);
}

export function validateLoginInput(input: string) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(input);
}

export function validateRegisterInput(input: string) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
  });

  return schema.validate(input);
}

export function validateEmail(input: string) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
  });

  return schema.validate(input);
}

export function validatePassword(input: string) {
  const schema = Joi.object({
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(input);
}

export default mongoose.model<IUser>("User", userSchema);
// exports.User = User;
// exports.validateUser = validateUser;
// exports.validateRegisterInput = validateRegisterInput;
// exports.validateEmail = validateEmail;
// exports.validateLoginInput = validateLoginInput;
// exports.validatePassword = validatePassword;


// import mongoose, { Document, Schema } from "mongoose";

// export interface IUser extends Document {
// 	name: string;
// 	email: string;
// 	password: string;
// }

// const UserSchema = new Schema({
// 	name: {
// 		type: String,
// 		required: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 	},
// });

// const User = mongoose.model<IUser>("users", UserSchema);

// export default User;
