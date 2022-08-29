import receitas from '../models/Receita.js';
import * as utils from '../utils/index.js'



class receitaService {

    static async cadastrarReceita(req, res) {
        try {
            utils.createResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarTodasReceitas(req, res) {
        try {
            utils.getAllResources(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarReceitaPorId(req, res) {
        try {
            utils.getResourceById(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarReceita(req, res) {
        try {
            utils.updateResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirReceita(req, res) {
        try {
            utils.deleteResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }
}

export default receitaService