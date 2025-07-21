import express from express
import mongoose from mongoose
import cors from cors
import dotenv from dotenv

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('API funcionando!'))

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(`Servidor rodando na porta: ${PORT}`))