import mongoose from 'mongoose'

const FormandoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  medidas: {
    altura: String,
    tamanhoBeca: String
  },
  pacoteEscolhido: {
    nome: String,
    preco: Number
  },
  turma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turma'
  },
  pagamento: {
    status: { type: String, default: 'pendente' },
    comprovanteUrl: String,
    vencimento: Date
  },
  contrato: {
    aceite: Boolean,
    ipAceite: String,
    dataAceite: Date,
    urlPDF: String
  }
})

export default mongoose.model('Formando', FormandoSchema)