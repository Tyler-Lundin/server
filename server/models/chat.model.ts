import { Schema, model } from 'mongoose'

const chatSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'New Chat',
  },
  messages: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'Message',
  },
  users: {
    type: Array<Schema.Types.ObjectId>(),
    ref: 'User',
  },
})

const Chat = model('Chat', chatSchema)

export default Chat
