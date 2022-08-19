import mongoose from "mongoose";

const despesaSchema = new mongoose.Schema(
    {
        descricao: { type: String, required: true },
        valor: { type: String, required: true },
        data: { type: Date, required: true },
    }
);

const despesas = mongoose.model('despesas',despesaSchema);

export default despesas;