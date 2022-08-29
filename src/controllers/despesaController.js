import despesaService from "../service/despesaService.js";



class despesaController {

    static async cadastrarDespesa(req, res) {
        try {
            despesaService.cadastrarDespesa(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarTodasDespesas(req, res) {
        try {
            despesaService.listarTodasDespesas(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarDespesaPorId(req, res) {
        try {
            despesaService.listarDespesaPorId(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarDespesa(req, res) {
        try {
            despesaService.atualizarDespesa(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirDespesa(req, res) {
        try {
            despesaService.excluirDespesa(req, res)
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }
}

export default despesaController;