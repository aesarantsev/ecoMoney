import mongoose, { Schema } from 'mongoose'

const sessionSchema = new Schema({
  session: String,
  session_id: String,
  expire: { type: Date, required: true, default: Date.now, expires: 14 },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session
