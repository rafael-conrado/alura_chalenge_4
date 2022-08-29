import despesas from "../models/Despesa.js";
import * as helpers from '../helpers/index.js'

class despesaService {

    static cadastrarDespesa(req, res) {
        try {
            helpers.createResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarTodasDespesas(req, res) {
        try {
            helpers.getAllResources(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarDespesaPorId(req, res) {
        try {
            helpers.getResourceById(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarDespesa(req, res) {
        try {
            helpers.updateResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirDespesa(req, res) {
        try {
            helpers.deleteResource(req, res, despesas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

}

export default despesaService