// Importa o módulo 'api' de outro arquivo chamado 'api'
import { api } from "./api";


// Função assíncrona para buscar Professor com base em filtros
export async function getProfessor(filters) {
    // Obtém o token de acesso da sessão do navegador
    const accessToken = sessionStorage.getItem('token');
    
    // Faz uma solicitação GET para a rota '/Professor' da API, passando o token de autorização e os filtros como parâmetros
    const result = await api.get('/professores', {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        },
        params: filters
    });

    // Retorna o resultado da solicitação
    return result;
}


// Função assíncrona para excluir um aluno com base no ID
export async function deleteProfessor(id) {
    // Obtém o token de acesso da sessão do navegador
    const accessToken = sessionStorage.getItem('token');
    
    // Faz uma solicitação DELETE para a rota '/Professor/{id}' da API, passando o token de autorização
    const result = await api.delete(`/professores/${id}`, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });

    // Retorna o resultado da solicitação
    return result;
}

// Função assíncrona para atualizar informações de um aluno
export async function updateProfessor(data) {
    // Obtém o token de acesso da sessão do navegador
    const accessToken = sessionStorage.getItem('token');
    
    // Faz uma solicitação PUT para a rota '/Professor/{id}' da API, passando dados de aluno e o token de autorização
    const result = await api.put(`/professores/${data.id}`, {
        nomeProfessor: data.nomeProfessor, 
        estado: data.estado, 
        cidade: data.cidade,
        disciplina: data.disciplina, 
        aulas: data.aulas,
        faltas: data.faltas
    
    }, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });

    // Retorna o resultado da solicitação
    return result;
}

// Função assíncrona para criar um novo aluno
export async function createProfessor(data) {
    // Obtém o token de acesso da sessão do navegador
    const accessToken = sessionStorage.getItem('token');
    
    // Faz uma solicitação POST para a rota '/aluno' da API, passando dados de aluno e o token de autorização
    const result = await api.post('/professor', {
        nomeProfessor: data.nomeProfessor, 
        estado: data.estado, 
        cidade: data.cidade,
        disciplina: data.disciplina, 
        aulas: data.aulas,
        faltas: data.faltas

    }, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });

    // Retorna o resultado da solicitação
    return result;
}
