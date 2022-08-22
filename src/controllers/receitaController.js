import receitas from '../models/Receita.js';
import validacoes from '../middleware/validations.js'

class receitaController {

    static async cadastrarReceita(req, res) {
        let receita = new receitas(req.body);
        let mesAtual = new Date().getMonth() + 1;
        let anoAtual = new Date().getFullYear();
        const { descricao, valor, data } = req.body;

        if (!descricao || !valor || !data) {
            res.status(422).json({ message: "Campos vazios!" });
            return;
        };

        receitas.find(
            {
                descricao: descricao,
                data: {
                    $gte: new Date(`${anoAtual}-${mesAtual}-01`),
                    $lte: new Date(`${anoAtual}-${mesAtual}-31`)
                }

            }
        )
            .exec((error, result) => {

                if (result.length > 0) {
                    res.status(422).json({ message: "Descrição já cadastrada" });
                    return;
                } else {
                    receita.save((error) => {
                        if (error) {
                            res.status(500).send({ message: 'erro ao cadastrar receita', error: error })
                        } else {
                            res.status(201).send({ message: "Receita criada com sucesso!" })
                        }
                    })
                }
            });
    }


    static listarTodasReceitas(req, res) {
        try {
            receitas.find()
                .exec((error, receitas) => {
                    res.status(200).json(receitas);
                })

        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarReceitaPorId(req, res) {
        const id = req.params.id;
        try {
            receitas.findById(id)
                .exec((error, receitas) => {

                    if (!receitas || error) {
                        res.status(404).send({ message: "Receita não encontrada" });
                        return;
                    }

                    res.status(200).json(receitas);
                })

        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }


    static atualizarReceita(req, res) {
        let receita = new receitas(req.body);
        let mesAtual = new Date().getMonth() + 1;
        let anoAtual = new Date().getFullYear();
        const { descricao, valor, data } = req.body;
        const id = req.params.id;


        if (!descricao || !valor || !data) {
            res.status(422).json({ message: "Campos vazios!" });
            return;
        };


        receitas.find(
            {
                descricao: descricao,
                data: {
                    $gte: new Date(`${anoAtual}-${mesAtual}-01`),
                    $lte: new Date(`${anoAtual}-${mesAtual}-31`)
                }

            }
        )
            .exec((error, result) => {

                if (result.length > 0) {
                    res.status(422).json({ message: "Descrição já cadastrada" });
                    return;
                } else {
                    receitas.findByIdAndUpdate(id, { $set: req.body }, (error) => {
                        if (!error || !receitaAtualizada) {
                            res.status(200).send({ message: "Receita atualizada com sucesso!" })
                        } else {
                            res.status(500).send({ message: "Erro interno!", error: error.message });
                        }
                    })
                }
            });


    }

    static excluirReceita(req, res) {
        const id = req.params.id;

        receitas.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.status(200).send({ message: "Receita removido com sucesso!" });
            } else {
                res.status(500).send({ message: error.message })
            }
        })
    }
}

export default receitaController;