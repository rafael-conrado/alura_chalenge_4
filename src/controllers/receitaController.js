import receitaService from "../service/receitaService.js";

class receitaController {

    static async cadastrarReceita(req, res) {
        try {
            receitaService.cadastrarReceita(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }


    static listarTodasReceitas(req, res) {
        try {
            receitaService.listarTodasReceitas(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarReceitaPorId(req, res) {
        try {
            receitaService.listarReceitaPorId(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }


    static atualizarReceita(req, res) {
        try {
            receitaService.atualizarReceita(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirReceita(req, res) {
        try {
            receitaService.excluirReceita(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }
}

export default receitaController;