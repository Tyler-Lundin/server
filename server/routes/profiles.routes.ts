import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import profileController from '../controllers/profile/profile.controller'

const router = Router()

router.get(
  '/api/profile',
  asyncHandler(async (req, res) => {
    profileController(req, res, 'getProfile')
  })
)

router.patch(
  '/api/profile',
  asyncHandler(async (req, res) => {
    profileController(req, res, 'updateProfile')
  })
)

// router.post('/login', usedConsoleLog)

export default router
