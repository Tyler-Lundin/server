import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import authController from '../controllers/auth/auth.controller'

const router = Router()

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    authController(req, res, 'login')
  })
)

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    authController(req, res, 'register')
  })
)

export default router
