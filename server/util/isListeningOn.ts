// BgGreen = "\x1b[42m"

import { BGwhite, green, reset } from './escapeColors'

// Reset = "\x1b[0m"
export const isListeningOn = (PORT: string | number) => () => {
  console.log('----------------------------------------')
  console.log(BGwhite, green, `Listening on port ${PORT}`, reset)
}
