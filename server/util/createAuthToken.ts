import jwt, { Secret } from 'jsonwebtoken'
import { IUser } from '../interfaces'

export interface IAuthToken {
  _id: string
  username: string
  email: string
}

function createAuthToken(user: any) {
  try {
    const { _id, username, email } = user
    const userPayload: IAuthToken = {
      _id,
      username,
      email,
    }
    return jwt.sign(userPayload, process.env.JWT_SECRET as Secret, {
      expiresIn: process.env.JWT_EXPIRE,
    })
  } catch (error) {
    console.log(error)
    return ''
  }
}

export default createAuthToken
