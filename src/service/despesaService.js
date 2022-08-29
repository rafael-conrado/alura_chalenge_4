import despesas from "../models/Despesa.js";
import * as utils from '../utils/index.js'

class despesaService {

    static cadastrarDespesa(req, res) {
        try {
            utils.createResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarTodasDespesas(req, res) {
        try {
            utils.getAllResources(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarDespesaPorId(req, res) {
        try {
            utils.getResourceById(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarDespesa(req, res) {
        try {
            utils.updateResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirDespesa(req, res) {
        try {
            utils.deleteResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

}

export default despesaService