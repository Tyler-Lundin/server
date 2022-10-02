import { Document, ObjectId } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  password?: string
  profile: ObjectId
}

export interface IProfile extends Document {
  profilePicture: string
  comments: ObjectId[]
  chats: ObjectId[]
  posts: ObjectId[]
  bio: string
}

export interface IPost extends Document {
  user: ObjectId
  title: string
  body: string
  comments: ObjectId[]
}
export interface IMessage extends Document {
  sender: ObjectId
  chat: ObjectId
  parent: ObjectId
  text: string
}
export interface IChat extends Document {
  name: string
  messages: ObjectId[]
  users: ObjectId[]
}
export interface IComment extends Document {
  user: ObjectId
  comment: string
  parent: ObjectId
}
