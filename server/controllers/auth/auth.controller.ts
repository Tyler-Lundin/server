import { Request, Response } from 'express'
import { IResponse, ISet } from '../../interfaces'
import cookieOptions from '../../configs/cookies.config'
import { authControls } from './auth.controls'

const authController = async (req: Request, res: Response, method: string) => {
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
    case 'login':
      set.response(await authControls.login(req, response))
      break

    case 'register':
      set.response(await authControls.register(req, response))
      break

    default:
      set.error('Method not found')
  }

  return res.status(response.status).json(response)
}

export default authController
