import { IResponse, IUser, IControls } from '../../interfaces'
import { Request } from 'express'

// createComment
// deleteComment
// editComment
// getComment
// getComments

export const commentControls: IControls = {
  createComment: async (req, response) => {
    console.log(req.body)
    return { ...response, status: 200, data: { message: 'createComment' } }
  },
  deleteComment: async (req, response) => {
    console.log(req.body)
    return { ...response, status: 200, data: { message: 'deleteComment' } }
  },
  editComment: async (req, response) => {
    console.log(req.body)
    return { ...response, status: 200, data: { message: 'editComment' } }
  },
  getComment: async (req, response) => {
    console.log(req.body)
    return { ...response, status: 200, data: { message: 'getComment' } }
  },
  getComments: async (req, response) => {
    console.log(req.body)
    return { ...response, status: 200, data: { message: 'getComments' } }
  },
}
