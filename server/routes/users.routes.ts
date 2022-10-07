import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import userController from '../controllers/user/user.controller'

const router = Router()

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     userController(req, res, 'getUser')
//   })
// )

export default router
