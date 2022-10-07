import { Request, Response } from 'express'
import cookieOptions from '../../configs/cookies.config'
import { IResponse, ISet } from '../../interfaces'
import postControls from './post.controls'

const postController = async (req: Request, res: Response, method: string) => {
  let response: IResponse = {
    error: null,
    data: null,
    status: 500,
    statusMessage: null,
  }

  const set: ISet = {
    response: (res) => (response = res),
    error: (error: string) => (response.error = error),
    data: (data: any) => (response.data = data),
    status: (status: number) => (response.status = status),
    cookie: (name: string, value: string) => res.cookie(name, value, cookieOptions),
    statusMessage: (statusMessage: string) => (response.statusMessage = statusMessage),
  }

  switch (method) {
    case 'createPost':
      set.response(await postControls.createPost(req, response))
      break
    case 'getPost':
      set.response(await postControls.getPost(req, response))
      break
    case 'getPosts':
      set.response(await postControls.getPosts(req, response))
      break
    case 'deletePost':
      set.response(await postControls.deletePost(req, response))
      break
    case 'updatePost':
      set.response(await postControls.updatePost(req, response))
      break
    case 'getPostsByUser':
      set.response(await postControls.getPostsByUser(req, response))
      break
    case 'getPostsByChat':
      set.response(await postControls.getPostsByChat(req, response))
      break
    case 'getPostsByUserAndChat':
      set.response(await postControls.getPostsByUserAndChat(req, response))
      break
    default:
      set.error('Method not found')
  }

  return res.status(response.status).json(response)
}

export default postController
