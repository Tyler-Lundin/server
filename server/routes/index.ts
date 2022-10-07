import { Router } from 'express'
import devLogs from '../util/devLogs'
import isAuthorized from '../middlewares/isAuthorized'
import userRouter from './users.routes'
import authRouter from './auth.routes'
import profileRouter from './profiles.routes'
// import chatRoutes from './chat/routes'
// import chatRouter from './chats.routes'

const router = Router()

router.use('/auth', devLogs, authRouter)
router.use('/user', devLogs, isAuthorized, userRouter)
router.use('/profile', devLogs, isAuthorized, profileRouter)
router.use('/chat', devLogs, isAuthorized)

export default router

export const directory = {
  auth: {
    login: 'POST /api/auth/login',
    register: 'POST /api/auth/register',
  },
  user: {
    get: 'GET /api/user/:id',
    update: 'PATCH /api/user/:id',
    delete: 'DELETE /api/user/:id',
  },
  profile: {
    get: 'GET /api/profile/:id',
    update: 'PATCH /api/profile/:id',
    delete: 'DELETE /api/profile/:id',
  },
  chat: {
    get: 'GET /api/chat/:id',
    addUser: 'POST /api/chat/:chatID/users',
    create: 'POST /api/chat',
    removeUser: 'DELETE /api/chat/:chatID/users',
    delete: 'DELETE /api/chat/:id',
  },
  messages: {
    get: 'GET /api/messages/:id',
    getAll: 'GET /api/messages',
    update: 'PATCH /api/messages/:id',
    delete: 'DELETE /api/messages/:id',
  },
  comments: {
    get: 'GET /api/comments/:id',
    post: 'POST /api/comments',
    update: 'PATCH /api/comments/:id',
    delete: 'DELETE /api/comments/:id',
  },
}

// @DefinitelyNotEnder on twitch's code
// let schemas = {
//     chat: "/api/chat",
//     chatOne: "/api/chat/:id",
//     notChatOne: "/api/notChat/:id",
//     chatOnePage: "/api/chat/:id/:page"
//   };

//   let test = "/api/chat/5681/find";

//   let schemasRouted = {};

//   let splitPath = (path) => path.split("/").filter((x) => !!x);
//   for (let [key, val] of Object.entries(schemas)) {
//     schemasRouted[key] = splitPath(val);
//   }

//   let getInfoFromString = (str) => {
//     let splitStr = splitPath(str);
//     let possibleSchemas = Object.keys(schemasRouted)
//       .filter((paths) => schemasRouted[paths].length === splitStr.length)
//       .map((path) => schemasRouted[path]);

//     return possibleSchemas;
//   };

//   console.log(getInfoFromString(test));
