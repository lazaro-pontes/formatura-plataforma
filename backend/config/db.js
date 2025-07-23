import mongooose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const conectarDB = async () => {
  try {
    await mongooose.connect(process.env.MONGO_URL)
    console.log('mongoDB conectado')
  } catch (error) {
    console.error('Erro ao conectar com o mongoDB: ', error)
    process.exit(1)
  }
}