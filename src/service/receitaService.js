import receitas from '../models/Receita.js';
import * as helpers from '../helpers/index.js'



class receitaService {

    static async cadastrarReceita(req, res) {
        try {
            helpers.createResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarTodasReceitas(req, res) {
        try {
            helpers.getAllResources(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static listarReceitaPorId(req, res) {
        try {
            helpers.getResourceById(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static atualizarReceita(req, res) {
        try {
            helpers.updateResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }

    static excluirReceita(req, res) {
        try {
            helpers.deleteResource(req, res, receitas);
        } catch (error) {
            res.status(500).send({ message: "Erro interno!", error: error.message });
        }
    }
}

export default receitaService