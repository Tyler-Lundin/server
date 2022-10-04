import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  message: {
    type: String,
    required: true,
  },
})

const Message = model('Message', messageSchema)

export default Message
