import mongoose from 'mongoose'
import { BGgreen, reset, white } from '../util/escapeColors'

const connectMessage = () => {
  console.log('----------------------------------------')
  console.log(BGgreen, white, `CONNECTED TO DATABASE`, reset)
}

export const ConnectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string, connectMessage)
  } catch (err: any) {
    console.error(err.message)
    process.exit(1)
  }
}
