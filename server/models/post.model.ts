import { Schema, model } from 'mongoose'

const postSchema = new Schema({
  user: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  body: {
    type: String,
    required: true,
    default: '',
  },
  comments: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Comment',
  },
})

const Post = model('Post', postSchema)

export default Post
