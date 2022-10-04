import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Profile',
  },
})

const User = model('User', userSchema)

export default User
