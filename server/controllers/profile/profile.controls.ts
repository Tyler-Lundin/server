import { IResponse } from '../../interfaces'
import { Request } from 'express'

const profileControls = {
  getProfile: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getProfile' } }
  },
  getFriendProfile: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getFriendProfile' } }
  },
  updateProfile: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'updateProfile' } }
  },
  deleteProfile: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'deleteProfile' } }
  },
  commentOnProfile: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'commentOnProfile' } }
  },
  addAsFriend: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'addAsFriend' } }
  },
  removeAsFriend: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'removeAsFriend' } }
  },
}

export default profileControls
