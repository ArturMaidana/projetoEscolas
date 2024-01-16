// Importações de bibliotecas e componentes React
import { Container, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Importações de componentes personalizados
import { Header } from "../Header";
import { Input } from "../Input";
import "../../Style/Home.css"; // Importe um arquivo CSS para estilização

// Importação da função de serviço para criar turmas
import { createProfessor } from "../../services/professor-service";

// Definição do componente 'FormularioProfessor'
export function FormularioProfessor() {
    // Inicialização dos estados e hooks
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();
    const [alertMessage, setAlertMessage] = useState(null);
    const navigate = useNavigate();

    // Função para exibir alertas
    const showAlert = (message, severity) => {
        setAlertMessage({ message, severity });
    };

    // Função para adicionar uma turma
    async function addProfessores(data) {
        try {
            await createProfessor(data);
            reset(); // Limpa o formulário após a submissão
            showAlert("Professor Cadastrada com sucesso", "success"); // Exibe o alerta de sucesso
            setTimeout(() => {
                setAlertMessage(null);
            }, 5000);
        } catch (error) {
            console.error(error);
            showAlert("Ocorreu um erro ao cadastrar a Professor", "error"); // Exibe o alerta de erro
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
                <Header title="Formulário de Professor" />

                <Col className="w-50 m-auto mt-4">
                    {" "}
                    {/* Adicionei a margem superior aqui */}
                    {/* Formulário de cadastro de turma */}
                    <Form
                        noValidate
                        onSubmit={handleSubmit(addProfessores)}
                        validated={!!errors}
                    >
                        <Input
                            className="mb-3"
                            type="text"
                            label="Nome da Professor"
                            placeholder="Insira o nome da Professor"
                            required={true}
                            name="nomeProfessor"
                            error={errors.nomeProfessor}
                            validations={register("nomeProfessor", {
                                required: {
                                    value: true,
                                    message: "Nome da Professor é obrigatório.",
                                },
                            })}
                        />
                        <Input
                            className="mb-3"
                            type="text"
                            label="Sigla do Estado"
                            placeholder="Insira o Estado"
                            required={true}
                            name="estado"
                            error={errors.estado}
                            validations={register("estado", {
                                required: {
                                    value: true,
                                    message: "O nome do Estado é obrigatório.",
                                },
                            })}
                        />

                        <Input
                            className="mb-3"
                            type="text"
                            label="Nome da Cidade"
                            placeholder="Insira o cidade"
                            required={true}
                            name="cidade"
                            error={errors.cidade}
                            validations={register("cidade", {
                                required: {
                                    value: true,
                                    message: "O nome do cidade é obrigatório.",
                                },
                            })}
                        />
                        <Input
                            className="mb-3"
                            type="text"
                            label="Nome da Disciplina"
                            placeholder="Insira o disciplina"
                            required={true}
                            name="disciplina"
                            error={errors.disciplina}
                            validations={register("disciplina", {
                                required: {
                                    value: true,
                                    message:
                                        "O nome do disciplina é obrigatório.",
                                },
                            })}
                        />

                        <Input
                            className="mb-3"
                            type="text"
                            label="Quantidade de Aulas"
                            placeholder="Insira as aulas"
                            required={true}
                            name="aulas"
                            error={errors.aulas}
                            validations={register("aulas", {
                                required: {
                                    value: true,
                                    message:
                                        "Quantidade de aulas é obrigatória.",
                                },
                            })}
                        />
                        <Input
                            className="mb-3"
                            type="text"
                            label="Quantidade de Faltas"
                            placeholder="Insira o número de  faltas"
                            required={true}
                            name="faltas"
                            error={errors.faltas}
                            validations={register("faltas", {
                                required: {
                                    value: true,
                                    message: "O nome do Estado é obrigatório.",
                                },
                            })}
                        />

                        <Grid container justifyContent="flex-end">
                            <Button
                                className="mt-3 mb-3"
                                variant="contained"
                                color="success"
                                type="submit"
                            >
                                {" "}
                                {/* Adicionei a margem superior aqui */}
                                Confirmar Cadastro
                            </Button>
                            <Grid item xs={0.3}></Grid>
                            <Button
                                className="mt-3 mb-3"
                                variant="contained"
                                color="error"
                                onClick={() => navigate("/Professores")}
                            >
                                Cancelar
                            </Button>
                        </Grid>
                    </Form>
                </Col>
            </Container>
        </div>
    );
}
