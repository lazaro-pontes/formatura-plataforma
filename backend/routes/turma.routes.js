import express from 'express'
import { buscarTurmaPorCodigo } from '../controllers/turma.controller'

const router = express.Router()

router.get('/:codigo', buscarTurmaPorCodigo)

export default router