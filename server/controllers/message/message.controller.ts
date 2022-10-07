import cookieOptions from '../../configs/cookies.config'
import { IResponse, ISet } from '../../interfaces'
import { Request, Response } from 'express'
import messageControls from './message.controls'

const messageController = async (req: Request, res: Response, method: string) => {
  let response: IResponse = {
    error: null,
    data: null,
    status: 500,
    statusMessage: null,
  }

  const set: ISet = {
    response: (res: IResponse) => (response = res),
    error: (error: string) => (response.error = error),
    data: (data: any) => (response.data = data),
    status: (status: number) => (response.status = status),
    cookie: (name: string, value: string) => res.cookie(name, value, cookieOptions),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
  }

  switch (method) {
    case 'createMessage':
      set.response(await messageControls.createMessage(req, response))
      break
    case 'getMessage':
      set.response(await messageControls.getMessage(req, response))
      break
    case 'getMessages':
      set.response(await messageControls.getMessages(req, response))
      break
    case 'deleteMessage':
      set.response(await messageControls.deleteMessage(req, response))
      break
    case 'updateMessage':
      set.response(await messageControls.updateMessage(req, response))
      break
    case 'getMessagesByChat':
      set.response(await messageControls.getMessagesByChat(req, response))
      break
    case 'getMessagesByUser':
      set.response(await messageControls.getMessagesByUser(req, response))
      break
    case 'getMessagesByUserAndChat':
      set.response(await messageControls.getMessagesByUserAndChat(req, response))
      break
    default:
      set.error('Method not found')
  }

  return res.status(response.status).json(response)
}

export default messageController
