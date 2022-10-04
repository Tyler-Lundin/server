import { Request, Response } from 'express'
import User from '../models/user.model'
import { findUser } from './user.controller'
import isPasswordValid from '../util/isPasswordValid'
import { IReturnPayload } from '../interfaces'

type setReturnPayload = {
  error: (error: string) => void
  data: (data: any) => void
  status: (status: number) => void
  cookie: (name: string, value: string) => void
}

const loginUser = async (
  username: string,
  email: string,
  password: string,
  set: setReturnPayload
) => {
  const user = await findUser(username, email)
  if (!user) {
    set.error('User not found')
    set.status(404)
    return null
  }
  if (!isPasswordValid(password, user.password)) {
    set.error('Incorrect password')
    set.status(401)
    return null
  }
}

const registerUser = async (
  username: string,
  email: string,
  password: string,
  set: setReturnPayload
) => {
  console.log('registering user')

  // const user = await findUser(username, email)
  const user = await User.findOne({ $or: [{ username }, { email }] })
  console.log('user', user)
  if (user) {
    set.error('User already exists')
    set.status(409)
    return null
  }
  const newUser = User.create({
    username,
    email,
    password,
  })
  set.status(201)
  set.data(newUser)
}

const authController = async (req: Request, res: Response) => {
  const { username = '', email = '', password = '' } = req.body
  const returnPayload: IReturnPayload = {
    error: null,
    data: null,
    status: 500,
  }
  const set: setReturnPayload = {
    error: (error: string) => (returnPayload.error = error),
    data: (data: any) => (returnPayload.data = data),
    status: (status: number) => (returnPayload.status = status),
    cookie: (name: string, value: string) => res.cookie(name, value),
  }

  const { method, url } = req
  switch (method) {
    case 'POST':
      if (url.endsWith('/login')) await loginUser(username, email, password, set)
      if (url.endsWith('/register')) await registerUser(username, email, password, set)
      break
    default:
      set.error('Invalid request')
      set.status(400)
      break
  }

  return res.status(returnPayload.status).json(returnPayload)
}

export default authController
