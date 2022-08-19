import express from "express";
import receitasController from "../controllers/receitaController.js";

const router = express.Router();

router
    .post('/receitas', receitasController.cadastrarReceita);

export default router;