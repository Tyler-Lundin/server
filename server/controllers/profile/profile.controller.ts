import { Request, Response } from 'express'
import { IResponse, ISet } from '../../interfaces'
import cookieOptions from '../../configs/cookies.config'
import profileControls from './profile.controls'

const profileController = async (req: Request, res: Response, method: string) => {
  let response: IResponse = {
    error: null,
    data: null,
    status: 500,
    statusMessage: null,
  }

  const set: ISet = {
    response: (res) => (response = res),
    error: (error: string) => (response.error = error),
    data: (data: any) => (response.data = data),
    status: (status: number) => (response.status = status),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
    cookie: (name: string, value: string) => res.cookie(name, value, cookieOptions),
  }

  switch (method) {
    case 'getProfile':
      set.response(await profileControls.getProfile(req, response))
      break
    case 'updateProfile':
      set.response(await profileControls.updateProfile(req, response))
      break
    case 'deleteProfile':
      set.response(await profileControls.deleteProfile(req, response))
      break
    case 'getFriendProfile':
      set.response(await profileControls.getFriendProfile(req, response))
      break
    case 'commentOnProfile':
      set.response(await profileControls.commentOnProfile(req, response))
      break
    case 'addAsFriend':
      set.response(await profileControls.addAsFriend(req, response))
      break
    case 'removeAsFriend':
      set.response(await profileControls.removeAsFriend(req, response))
      break
    default:
      set.error('Method not found')
  }

  return res.status(response.status).json(response)
}

export default profileController
