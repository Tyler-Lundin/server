import { Schema, model } from 'mongoose'

const profileSchema = new Schema({
  profilePicture: {
    type: String,
    required: true,
    default: '',
  },
  comments: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Comment',
  },
  chats: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Chat',
  },
  posts: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Post',
  },
  bio: {
    type: String,
    required: true,
    default: '',
  },
})

const Profile = model('Profile', profileSchema)

export default Profile
