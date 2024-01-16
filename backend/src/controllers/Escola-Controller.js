const { HttpHelper } = require('../utils/http-helper');
const { EscolaModel } = require('../models/escola-model');
const { Validates } = require('../utils/validates');


class EscolaController {
    // Método para criar um novo escola
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nomeEscola, estado, cidade, diretor } = request.body;
            
            // Verifica se o nome do escola está presente no corpo da solicitação
            if (!nomeEscola) return httpHelper.badRequest('Parâmetros inválidos!');
            
            // Valida o Estado usando a função 'validTurn' do módulo 'Validates'
            if (estado) {
                const validEstado = Validates.validEstado(estado);
                if (!validEstado) return httpHelper.badRequest('Estado inválido!');
            }
            
            // Cria um novo escola no banco de dados usando o modelo 'EscolaModel'
            const escolas = await EscolaModel.create({
                nomeEscola, estado, cidade, diretor
            });
            
            return httpHelper.created(escolas);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para obter todos os escolas com base em filtros
    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nomeEscola, cidade, estado } = request.query;

            const filter = {}
            if (nomeEscola){
                filter.nomeEscola = nomeEscola;
            }
            if (cidade) {
                filter.cidade = cidade;
            }
            if (estado) {
                filter.estado = estado;
            }

            // Busca todos os escolas no banco de dados com base nos filtros
            const escolas = await EscolaModel.findAll({
                where: filter
            });
            
            return httpHelper.ok(escolas);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para excluir um escola
    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;

            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

            // Verifica se o escola existe no banco de dados
            const escolaExists = await EscolaModel.findOne({ where: { id } });

            if (!escolaExists) return httpHelper.notFound('Escola não encontrado!');
            
            // Exclui o escola do banco de dados
            await EscolaModel.destroy({ where: { id } });

            return httpHelper.ok({
                message: 'Escola deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    // Método para atualizar os dados de um escola
    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;

            const { nomeEscola, estado, cidade, diretor } = request.body;

            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            
            // Valida o Estado usando a função 'validEstado' do módulo 'Validates'
            if (estado) {
                const validEstado = Validates.validEstado(estado);
                if (!validEstado) return httpHelper.badRequest('Estado inválido!');
            }
            
            // Verifica se o escola existe no banco de dados
            const escolaExists = await EscolaModel.findByPk(id);
            
            if (!escolaExists) return httpHelper.notFound('escola não encontrado!');
            
            // Atualiza os dados do escola no banco de dados
            await EscolaModel.update({
                nomeEscola, estado, cidade, diretor
            }, {
                where: { id }
            });
            
            return httpHelper.ok({
                message: 'escola atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { EscolaController };
