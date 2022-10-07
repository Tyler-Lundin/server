import { Secret } from 'jsonwebtoken'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: string
      JWT_SECRET: Secret
      JWT_EXPIRE: string
    }
  }
}

// not sure if this is working or not !

export {}
