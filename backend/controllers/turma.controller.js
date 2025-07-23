import Turma from '../models/Turma.js'

export const buscarTurmaPorCodigo = async (req, res) => {
  try {
    const { codigo } = req.params
    const turma = await Turma.findOne({ codigo })

    if (!turma) return res.status(404).json({ erro: 'Turma não encontrada' })

    res.json(turma)
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar turma' })
  }
}
