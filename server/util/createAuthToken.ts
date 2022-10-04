import jwt, { Secret } from 'jsonwebtoken'
import { IUser } from '../interfaces'

export interface IAuthToken {
  _id: string
  username: string
  email: string
}

function createAuthToken(user: IUser) {
  const { _id, username, email } = user
  if (!user) return
  const userPayload: IAuthToken = {
    _id,
    username,
    email,
  }
  return jwt.sign(userPayload, process.env.JWT_SECRET as Secret, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

export default createAuthToken
