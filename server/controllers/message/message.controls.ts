import { Request } from 'express'
import { IResponse } from '../../interfaces'

const messageControls = {
  createMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'createMessage' } }
  },
  getMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getMessage' } }
  },
  getMessages: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getMessages' } }
  },
  deleteMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'deleteMessage' } }
  },
  updateMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'updateMessage' } }
  },
  getMessagesByChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getMessagesByChat' } }
  },
  getMessagesByUser: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getMessagesByUser' } }
  },
  getMessagesByUserAndChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getMessagesByUserAndChat' } }
  },
}

export default messageControls
