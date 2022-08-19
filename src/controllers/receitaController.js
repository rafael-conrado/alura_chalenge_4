import receitas from '../models/Receita.js';

class receitaController {

    static async cadastrarReceita(req, res) {
        let receita = new receitas(req.body);

        const { descricao, valor, data } = req.body;

        if (!descricao || !valor || !data) {
            res.status(422).json({ message: "Campos vazios!" });
            return;
        };

        receita.save((error) => {
            if (error) {
                res.status(500).send({ message: 'erro ao cadastrar receita', error: error })
            } else {
                res.status(201).send({ message: "Receita criada com sucesso!" })
            }
        })


    }


    static async listarTodasReceitas(req, res) {
        try {
            await receitas.find()
                .exec((error,receitas)=>{
                    res.status(200).json(receitas);
                })


        } catch (error) {

        }
    }
}

export default receitaController;