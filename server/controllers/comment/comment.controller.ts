import { IResponse, ISet } from '../../interfaces'
import { Request, Response } from 'express'
import cookieOptions from '../../configs/cookies.config'
import { commentControls } from './comment.controls'

const authController = async (req: Request, res: Response, method: string) => {
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
    cookie: (name: string, value: string) => res.cookie(name, value, cookieOptions),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
  }

  switch (method) {
    case 'createComment':
      set.response(await commentControls.createComment(req, response))
      break
    case 'deleteComment':
      set.response(await commentControls.deleteComment(req, response))
      break
    case 'updateComment':
      set.response(await commentControls.editComment(req, response))
      break
    case 'getComments':
      set.response(await commentControls.getComments(req, response))
      break
    default:
      set.error('Method not found')
  }

  return res.status(response.status).json(response)
}

export default authController
