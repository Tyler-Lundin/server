import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'

const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.cookies.Authorization

  if (!authToken) return null
  const user = verify(authToken, process.env.JWT_SECRET as Secret)

  if (!user) return null
  req.user = user

  next()
}

export default isAuthorized
