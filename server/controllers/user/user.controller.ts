import { Request, Response } from 'express'
import cookieOptions from '../../configs/cookies.config'
import { ICases, IResponse, ISet } from '../../interfaces'
import User from '../../models/user.model'
import bcrypt from 'bcryptjs'

const userController = async (req: Request, res: Response) => {
  let response: IResponse = {
    error: null,
    data: null,
    status: 500,
    statusMessage: null,
  }

  const set: ISet = {
    all: (res) => (response = res),
    error: (error: string) => (response.error = error),
    data: (data: any) => (response.data = data),
    status: (status: number) => (response.status = status),
    cookie: (name: string, value: string) => res.cookie(name, value, cookieOptions),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
  }
}

export default userController
