import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import postController from '../controllers/post/post.controller'

const router = Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    postController(req, res, 'getPosts')
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    postController(req, res, 'getPost')
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    postController(req, res, 'createPost')
  })
)

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    postController(req, res, 'deletePost')
  })
)

router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    postController(req, res, 'updatePost')
  })
)

router.get(
  '/user/:id',
  asyncHandler(async (req, res) => {
    postController(req, res, 'getPostsByUser')
  })
)

router.get(
  '/chat/:id',
  asyncHandler(async (req, res) => {
    postController(req, res, 'getPostsByChat')
  })
)

router.get(
  '/user/:userId/chat/:chatId',
  asyncHandler(async (req, res) => {
    postController(req, res, 'getPostsByUserAndChat')
  })
)

export default router
