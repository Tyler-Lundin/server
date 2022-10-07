import { IResponse } from '../../interfaces'
import { Request } from 'express'

const postControls = {
  createPost: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'createPost' } }
  },

  getPost: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getPost' } }
  },

  getPosts: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getPosts' } }
  },

  deletePost: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'deletePost' } }
  },

  updatePost: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'updatePost' } }
  },

  getPostsByUser: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getPostsByUser' } }
  },

  getPostsByChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getPostsByChat' } }
  },

  getPostsByUserAndChat: async (req: Request, response: IResponse) => {
    return { ...response, data: { message: 'getPostsByUserAndChat' } }
  },
}

export default postControls
