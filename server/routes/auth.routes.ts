import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import authController from '../controllers/auth.controller'
import usedConsoleLog from '../util/usedConsoleLog'
const router = Router()

router.use(
  asyncHandler(async (req, res) => {
    authController(req, res)
  })
)

// router.post('/login', usedConsoleLog)

export default router
