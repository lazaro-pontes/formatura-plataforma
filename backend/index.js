import express from express
import cors from cors
import dotenv from dotenv

import { conectarDB } from "./config/db"
import turmaRoutes from './routes/turma.routes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

conectarDB()

app.use('/api/turmas', turmaRoutes)

app.get('/', (req, res) => {
  res.send('API da Plataforma de Formatura funcionando!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta: ${PORT}`)
})