import { IUser } from '../interfaces'
import User from '../models/user.model'

export const findUser = async (username: string, email: string) => {
  try {
    const user = await User.findOne({ $or: [{ username }, { email }] })
    if (!user) return null
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

const userControls = {}
