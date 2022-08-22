import despesas from '../models/Despesa.js';


class despesaController {

    static async cadastrarDespesa(req, res) {
        const despesa = new despesas(req.body);
        const mesAtual = new Date().getMonth() + 1;
        const anoAtual = new Date().getFullYear();
        const { descricao, valor, data } = req.body;

        if (!descricao || !valor || !data) {
            res.status(422).json({ error: "Campos vazios!", message: "Todos os campos são obrigatórios!" });
            return;
        };

        despesas.find({
            descricao: descricao,
            data: {
                $gte: new Date(`${anoAtual}-${mesAtual}-01`),
                $lte: new Date(`${anoAtual}-${mesAtual}-31`)
            }

        })
            .exec((error, result) => {

                if (error) {
                    res.status(500).send({ message: 'erro ao cadastrar despesa', error: error });
                }

                if (result.length > 0) {
                    res.status(422).json({ message: "Descrição já cadastrada" });
                    return;
                }

                despesa.save((error) => {
                    if (error) {
                        res.status(500).send({ message: 'erro ao cadastrar despesa', error: error });
                        return;
                    }

                    res.status(201).send({ message: "Despesa criada com sucesso!" })

                });

            });
    }

    static listarTodasDespesas(req, res) {
        try {
            despesas.find()
                .exec((error, despesas) => {

                    if (error) {
                        res.status(500).send({ message: "Erro interno!", error: error.message });
                        return;
                    }

                    res.status(200).json(despesas);
                })

        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarDespesaPorId(req, res) {
        const id = req.params.id;
        try {
            despesas.findById(id)
                .exec((error, despesas) => {

                    if (error) {
                        res.status(500).send({ message: "Erro interno!", error: error.message });
                        return;
                    }

                    if (!despesas) {
                        res.status(404).send({ message: "Despesa não encontrada" });
                        return;
                    }

                    res.status(200).json(despesas);
                })

        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarDespesa(req, res) {
        let despesa = new despesas(req.body);
        let mesAtual = new Date().getMonth() + 1;
        let anoAtual = new Date().getFullYear();
        const { descricao, valor, data } = req.body;
        const id = req.params.id;

        if (!descricao || !valor || !data) {
            res.status(422).json({ error: "Campos vazios!", message: "Todos os campos são obrigatórios!" });
            return;
        };


        despesas.find(
            {
                descricao: descricao,
                data: {
                    $gte: new Date(`${anoAtual}-${mesAtual}-01`),
                    $lte: new Date(`${anoAtual}-${mesAtual}-31`)
                }

            }
        )
            .exec((error, result) => {

                if (error) {
                    res.status(500).send({ message: 'erro ao cadastrar despesa', error: error });
                    return;
                }

                if (result.length > 0) {
                    res.status(422).json({ message: "Descrição já cadastrada" });
                    return;
                }
                despesas.findByIdAndUpdate(id, { $set: req.body }, (error) => {
                    if (error) {
                        res.status(500).send({ message: 'erro ao atualizar despesa', error: error });
                        return;
                    }

                    res.status(200).send({ message: "Despesa atualizada com sucesso!" });
                });
            });
    }

    static excluirDespesa(req, res) {
        const id = req.params.id;

        despesas.findByIdAndDelete(id, (error) => {

            if (error) {
                res.status(500).send({ message: 'erro ao excluir despesa', error: error });
                return;
            }

            res.status(200).send({ message: "Despesa removida com sucesso!" });
        })
    }
}

export default despesaController;