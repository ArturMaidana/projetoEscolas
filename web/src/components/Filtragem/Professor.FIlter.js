import React, { useState } from "react";

// O componente recebe uma propriedade chamada 'onFilter', que é uma função para aplicar o filtro.
export function ProfessorFilter({ onFilter }) {
    // Define um estado para o filtro com dois campos: 'nomedisciplina' e 'professor'.
    const [filtro, setFiltro] = useState({
        nomeProfessor: "",
        disciplina: "",
    });

    // Esta função é chamada sempre que um campo de entrada é alterado.
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Atualiza o estado do filtro com os valores dos campos de entrada.
        setFiltro({ ...filtro, [name]: value });
    };

    // Esta função é chamada quando o botão de filtro é clicado.
    const handleFilterClick = () => {
        // Chama a função 'onFilter' passando o estado atual do filtro como argumento.
        onFilter(filtro);
    };

    return (
        <div className="mb-3">
            <div className="d-flex justify-content-center">
                <div className="me-4">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        id="nomeProfessor"
                        name="nomeProfessor"
                        placeholder="Turma"
                        value={filtro.nomeProfessor}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="me-4">
                    <input
                        type="text"
                        className="form-control form-control-md"
                        id="disciplina"
                        name="disciplina"
                        placeholder="Turma"
                        value={filtro.disciplina}
                        onChange={handleInputChange}
                    />
                </div>

                <button
                    className="btn btn-primary btn-md"
                    onClick={handleFilterClick}
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
}
