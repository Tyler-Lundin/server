import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: ['Profile', 'Post', 'Comment'],
  },
})

const Comment = model('Comment', commentSchema)

export default Comment
