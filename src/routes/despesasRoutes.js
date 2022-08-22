import express from "express";
import despesaController from "../controllers/despesaController.js";

const router = express.Router();

router
    .get('/despesas', despesaController.listarTodasDespesas)
    .get('/despesas/:id', despesaController.listarDespesaPorId)
    .post('/despesas', despesaController.cadastrarDespesa)
    .put('/despesas/:id', despesaController.atualizarDespesa)
    .delete('/despesas/:id', despesaController.excluirDespesa)


export default router;