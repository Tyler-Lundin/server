import express from 'express'
import dotenv from 'dotenv'
import { isListeningOn } from './util/isListeningOn'
import { ConnectDatabase } from './configs/db.config'
import router from './routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()
ConnectDatabase()

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api', router)

const PORT = process.env.PORT || 3500
app.listen(PORT, isListeningOn(PORT))
