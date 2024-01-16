const { HttpHelper } = require('../utils/http-helper');
const { professorModel } = require('../models/professor-model');
const { Validates } = require('../utils/validates');



class ProfessorController {
    // Método para criar um novo Professor
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nomeProfessor, estado, cidade, disciplina, aulas, faltas } = request.body;
            
            // Verifica se o nome do professor está presente no corpo da solicitação
            if (!nomeProfessor) return httpHelper.badRequest('Parâmetros inválidos!');
            
            // Valida o estado usando a função 'validEstado' do módulo 'Validates'
            if (estado) {
                const validEstado = Validates.validEstado(estado);
                if (!validEstado) return httpHelper.badRequest('estado inválido!');
            }
            
            // Cria um novo professor no banco de dados usando o modelo 'professorModel'
            const professors = await professorModel.create({
                nomeProfessor, estado, cidade, disciplina, aulas, faltas,
            });
            
            return httpHelper.created(professors);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para obter todos os professors com base em filtros
    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nomeProfessor, estado, disciplina } = request.query;

            const filter = {}
            if (nomeProfessor){
                filter.nomeProfessor = nomeProfessor;
            }
            if (estado) {
                filter.estado = estado;
            }
            if (disciplina) {
                filter.disciplina = disciplina;
            }

            // Busca todos os professors no banco de dados com base nos filtros
            const professors = await professorModel.findAll({
                where: filter
            });
            
            return httpHelper.ok(professors);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para excluir um professor
    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;

            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

            // Verifica se o professor existe no banco de dados
            const professorsExists = await professorModel.findOne({ where: { id } });

            if (!professorsExists) return httpHelper.notFound('professor não encontrado!');
            
            // Exclui o professor do banco de dados
            await professorModel.destroy({ where: { id } });

            return httpHelper.ok({
                message: 'professor deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para atualizar os dados de um professor
    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;

            const { nomeProfessor, estado, cidade, disciplina, aulas, faltas } = request.body;

            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            
            // Valida o estado usando a função 'validEstado' do módulo 'Validates'
            if (estado) {
                const validEstado = Validates.validEstado(estado);
                if (!validEstado) return httpHelper.badRequest('estado inválido!');
            }
            
            // Verifica se o professor existe no banco de dados
            const professorsExists = await professorModel.findByPk(id);
            
            if (!professorsExists) return httpHelper.notFound('professor não encontrado!');
            
            // Atualiza os dados do professor no banco de dados
            await professorModel.update({
                nomeProfessor, estado, cidade, disciplina, aulas, faltas
            }, {
                where: { id }
            });
            
            return httpHelper.ok({
                message: 'professor atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { ProfessorController };
