import { Schema, model } from 'mongoose'

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  profilePicture: {
    type: String,
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
    default: '',
  },
})

const Profile = model('Profile', profileSchema)

export default Profile
