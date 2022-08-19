import express from "express";
import receitasController from "../controllers/receitaController.js";

const router = express.Router();

router
    .get('/receitas', receitasController.listarTodasReceitas)
    .post('/receitas', receitasController.cadastrarReceita)

export default router;