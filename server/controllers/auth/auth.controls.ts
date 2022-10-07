import bcrypt from 'bcryptjs'
import { Request, response } from 'express'
import { IResponse, IUser } from '../../interfaces'
import User from '../../models/user.model'
import createAuthToken from '../../util/createAuthToken'

export interface IAuthControls {
  login: (req: Request, response: IResponse) => Promise<any>
  register: (req: Request, response: IResponse) => Promise<any>
}

export const authControls: IAuthControls = {
  login: async ({ body }, response) => {
    const { username, password } = body
    if (!username || !password)
      return { ...response, status: 400, error: 'Please provide username and password' }
    const R = new RegExp(username, 'i')
    const user = await User.findOne({
      $or: [
        {
          username: {
            $regex: R,
          },
        },
        {
          email: {
            $regex: R,
          },
        },
      ],
    })
    if (!user) {
      return { ...response, error: 'User not found', status: 404 }
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return { ...response, error: 'Invalid password', status: 401 }
    }
    const authToken = createAuthToken(user)
    return { ...response, data: authToken, status: 200 }
  },
  register: async ({ body }, response) => {
    const { username, email, password } = body
    const user = await User.findOne({ username })
    if (user) return { ...response, error: 'User already exists', status: 400 }
    const hash = await bcrypt.hash(password ? password : '', 10)
    const newUser = await User.create({
      username,
      email,
      password: hash,
    })
    const authToken = createAuthToken(newUser)
    return { ...response, data: authToken, status: 200 }
  },
}
