import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import {
  // addUserToChat,
  createChat,
  deleteChat,
  getChat,
  removeUserFromChat,
} from '../controllers/chat/chat.controller'
// import chatController from '../controllers/chat.controller'

const router = Router()

// chat: {
//   get: 'GET /api/chat/:id',
//   addUser: 'POST /api/chat/:chatID/users',
//   create: 'POST /api/chat',
//   removeUser: 'DELETE /api/chat/:chatID/users',
//   delete: 'DELETE /api/chat/:id',
// },

router.get(
  '/api/chat/:id',
  asyncHandler(async (req, res) => {
    getChat(req, res)
  })
)

router.post(
  '/api/chat',
  asyncHandler(async (req, res) => {
    createChat(req, res)
  })
)

// router.post(
//   '/api/chat/:chatID/users',
//   asyncHandler(async (req, res) => {
//     addUserToChat(req, res)
//   })
// )

router.delete(
  '/api/chat/:chatID/users',
  asyncHandler(async (req, res) => {
    removeUserFromChat(req, res)
  })
)

//   delete: 'DELETE /api/chat/:id',
router.delete(
  '/api/chat/:id',
  asyncHandler(async (req, res) => {
    deleteChat(req, res)
  })
)

export default router
