import { Request, Response } from 'express'
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

export interface IResponse {
  status: number
  statusMessage: string | null
  error: string | null
  data:
    | { message: string }
    | IUser
    | IProfile
    | IPost
    | IMessage
    | IChat
    | IComment
    | IUser[]
    | IProfile[]
    | IPost[]
    | IMessage[]
    | IChat[]
    | IComment[]
    | null
}

export interface ICases {
  [key: string]: () => void
}

export interface ISet {
  response: (res: IResponse) => void
  status: (status: number) => void
  statusMessage: (statusMessage: string) => void
  error: (error: string) => void
  data: (data: any) => void
  cookie: (name: string, value: string) => void
}

export interface IChatBody {
  chatName?: string
  chatID?: string
  message?: IMessage
}

export interface IControls {
  [key: string | symbol]: (req: Request, res: IResponse) => Promise<IResponse>
}

export interface IController {
  (req: Request, res: Response): Promise<void>
}
