import { Request, Response } from 'express'
import { IChatBody, IResponse, ISet } from '../../interfaces'
import chatControls from './chat.controls'

const chatController = async (req: Request, res: Response, method: string) => {
  let response: IResponse = {
    status: 200,
    statusMessage: null,
    error: null,
    data: null,
  }

  const set: ISet = {
    response: (res: IResponse) => (response = res),
    status: (status: number) => (response.status = status),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
    error: (error: string) => (response.error = error),
    data: (data: any) => (response.data = data),
    cookie: (name: string, value: string) => res.cookie(name, value),
  }

  switch (method) {
    case 'createChat':
      set.response(await chatControls.createChat(req, response))
      break
    case 'getChat':
      set.response(await chatControls.getChat(req, response))
      break
    case 'sendMessage':
      set.response(await chatControls.sendMessage(req, response))
      break
    case 'getMessages':
      set.response(await chatControls.getMessages(req, response))
      break
    case 'getChats':
      set.response(await chatControls.getChats(req, response))
      break
    default:
      set.error('Method not found')
  }
}
