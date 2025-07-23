import mongoose from 'mongoose'

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true },
  pacotesDisponiveis: [{
    nome: String,
    descricao: String,
    preco: Number
  }]
})

export default mongoose.model('Turma', TurmaSchema)