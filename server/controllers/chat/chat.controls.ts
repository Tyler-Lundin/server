import { Request } from 'express'
import { IResponse } from '../../interfaces'

export interface chatControls {
  getChats: (req: Request, response: IResponse) => Promise<IResponse>
  getChat: (req: Request, response: IResponse) => Promise<IResponse>
  createChat: (req: Request, response: IResponse) => Promise<IResponse>
  deleteChat: (req: Request, response: IResponse) => Promise<IResponse>
  updateChat: (req: Request, response: IResponse) => Promise<IResponse>
  addMessage: (req: Request, response: IResponse) => Promise<IResponse>
  deleteMessage: (req: Request, response: IResponse) => Promise<IResponse>
  updateMessage: (req: Request, response: IResponse) => Promise<IResponse>
}

const chatControls = {
  getChats: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getChats' } }
  },
  getChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getChat' } }
  },
  createChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'createChat' } }
  },
  deleteChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'deleteChat' } }
  },
  updateChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'updateChat' } }
  },
  addMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'addMessage' } }
  },
  deleteMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'deleteMessage' } }
  },
  updateMessage: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'updateMessage' } }
  },
}

export default chatControls
