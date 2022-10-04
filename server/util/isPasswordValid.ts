import bcrypt from 'bcryptjs'

const isPasswordValid = async (password: string, passwordHash: string) => {
  return await bcrypt.compare(password, passwordHash)
}

export default isPasswordValid
