import { Schema, model } from 'mongoose'
import { IMessage } from '../interfaces'

const messageSchema = new Schema<IMessage>({
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
  text: {
    type: String,
    required: true,
  },
})

const Message = model('Message', messageSchema)

export default Message
