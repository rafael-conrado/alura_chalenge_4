import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema(
    {
        descricao: { type: String, required: true },
        valor: { type: String, required: true },
        data: { type: Date, required: true },
    }
);

const receitas = mongoose.model('receitas', receitaSchema);

export default receitas;