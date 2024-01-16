// Importações de bibliotecas e componentes
import { Container, Col, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { jsPDF } from "jspdf";

// Importações de componentes personalizados
import { ProfessorFilter } from "../components/Filtragem/Professor.FIlter";
import { Professor } from "../components/Professor";
import { Header } from "../components/Header";
import "../Style/Home.css"; // Importe um arquivo CSS para estilização

// Importações de funções de serviço para Professores
import {
    getProfessor,
    updateProfessor,
    deleteProfessor,
} from "../services/professor-service";

// Definição do componente 'Professores'
export function Professores() {
    // Estado para armazenar as Professores
    const [Professores, setProfessores] = useState([]);

    // Estado para controlar a exibição do alerta
    const [isCreated, setIsCreated] = useState(false);

    // Estado para armazenar a mensagem do alerta
    const [alertMessage, setAlertMessage] = useState(null);

    // Navegação
    const navigate = useNavigate();

    // Função para filtrar Professores com base em um filtro
    const handleFilterProfessores = (filtro) => {
        findProfessores(filtro);
    };

    // Função para exibir um alerta
    const showAlert = (message, severity) => {
        setAlertMessage({ message, severity });
    };

    // Função para gerar um PDF com detalhes de uma Professores
    const generatePDF = (Professores) => {
        const doc = new jsPDF();

        doc.text("Detalhes da Professores:", 10, 10);
        doc.text(`Nome da Professores: ${Professores.nomeProfessores}`, 10, 20);

        doc.save("Professores.pdf");
    };

    // Efeito para carregar as Professores ao montar o componente
    useEffect(() => {
        findProfessores();
        // eslint-disable-next-line
    }, []);

    // Função assíncrona para buscar Professores
    async function findProfessores(filters) {
        try {
            const result = await getProfessor(filters);
            setProfessores(result.data);
        } catch (error) {
            console.error(error);
            navigate("/");
        }
    }

    // Função assíncrona para excluir uma Professores
    async function removeProfessores(id) {
        try {
            await deleteProfessor(id);
            await findProfessores();
            showAlert("Professores excluída com sucesso", "success"); // Exibe o alerta de sucesso
            setTimeout(() => {
                setAlertMessage(null);
            }, 5000);
        } catch (error) {
            console.error(error);
            showAlert("Ocorreu um erro ao excluir a Professores", "error"); // Exibe o alerta de erro
        }
    }

    // Função assíncrona para editar informações de uma Professores
    async function editProfessores(data) {
        try {
            await updateProfessor({
                id: data.id,
                nomeProfessor: data.nomeProfessor,
                estado: data.estado,
                cidade: data.cidade,
                disciplina: data.disciplina,
                aulas: data.aulas,
                faltas: data.faltas,
            });
            await findProfessores();
            showAlert("Professores Editado com sucesso", "success"); // Exibe o alerta de sucesso
            setTimeout(() => {
                setAlertMessage(null);
            }, 5000);
        } catch (error) {
            console.error(error);
            showAlert("Ocorreu um erro ao editar a Professores", "error"); // Exibe o alerta de erro
        }
    }

    // Renderização do componente
    return (
        <div className="container-margin">
            {alertMessage && (
                <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity={alertMessage.severity}>
                        {alertMessage.message}
                    </Alert>
                </Stack>
            )}
            <Container fluid>
                <Header title="Cadastro de Professores" />
                <Row className="w-50 m-auto mb-5 mt-5 ">
                    <Col md="10">
                        <Link to="/Professores/formulario">
                            <Button
                                variant="contained"
                                onClick={() => setIsCreated(true)}
                            >
                                Criar novo Professores
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <ProfessorFilter onFilter={handleFilterProfessores} />
                <Col className="w-50 m-auto">
                    {Professores && Professores.length > 0 ? (
                        Professores.map((Professores, index) => (
                            <Professor
                                key={index}
                                Professores={Professores}
                                removeProfessores={async () =>
                                    await removeProfessores(Professores.id)
                                }
                                editProfessores={editProfessores}
                                generatePDF={() => generatePDF(Professores)}
                            />
                        ))
                    ) : (
                        <p className="text-center">
                            Não existe nenhuma Professores cadastrada!
                        </p>
                    )}
                </Col>
                {/* Formulário dentro do Modal, ideal seria componentizar também, pois é parecido com o Modal de editar */}
                <Modal
                    show={isCreated}
                    onHide={() => setIsCreated(false)}
                    centered={true}
                    className="centered-modal"
                >
                    <Modal.Header>
                        <Modal.Title>Cadastrar nova Professores</Modal.Title>
                    </Modal.Header>
                </Modal>
            </Container>
        </div>
    );
}
