import { NextFunction, Request, Response } from 'express'
import { red, bright, reset, BGwhite, black, dim } from './escapeColors'

const devLogs = (req: Request, res: Response, next: NextFunction) => {
  console.log(red, bright, BGwhite)
  console.log(`${req.method} - ${req.originalUrl} - ${req.ip} - ${new Date().toLocaleTimeString()}`)
  console.log(black, BGwhite, '-'.repeat(20))
  console.log('-', `req.body: ${JSON.stringify(req.body)}`)
  console.log('-', `req.cookies: ${JSON.stringify(req.cookies)}`)
  console.log('-', `req.url: ${JSON.stringify(req.url)}`)
  console.log('-', `req.method: ${JSON.stringify(req.method)}`)

  console.log(reset)

  next()
}

export default devLogs
