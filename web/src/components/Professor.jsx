import { useState } from "react"; // Importa o hook useState do React para gerenciar estados locais
import { Form, Modal } from "react-bootstrap"; // Importa componentes do React Bootstrap para formulário e modal
import { useForm } from "react-hook-form"; // Importa o hook useForm do React Hook Form para gerenciar o estado do formulário
import Card from "@mui/material/Card"; // Importa o componente de cartão do Material-UI
import CardContent from "@mui/material/CardContent"; // Importa o componente de conteúdo de cartão do Material-UI
import CardActions from "@mui/material/CardActions"; // Importa o componente de ações de cartão do Material-UI
import Typography from "@mui/material/Typography"; // Importa o componente de tipografia do Material-UI
import Button from "@mui/material/Button"; // Importa o componente de botão do Material-UI
import Grid from "@mui/material/Grid"; // Importa o componente de grade do Material-UI
import "jspdf-autotable"; // Importa a extensão jspdf-autotable para tabelas no PDF
import { DeleteConfirmationModal } from "./Filtragem/DeleteConfirmationModal"; // Importa o componente modal de confirmação de exclusão
import { Input } from "./Input"; // Importa o componente de entrada de dados

export function Professor(props) {
    // Hook useForm para gerenciar o estado do formulário
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    // Estado local para controlar se a turma foi atualizada
    const [isUpdated, setIsUpdated] = useState(false);

    // Estado local para controlar a exibição do modal de confirmação de exclusão
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    // Função para gerar um PDF com informações da turma e alunos

    // Função para editar a turma
    async function editProfessor(data) {
        await props.editProfessor({ ...data, id: props.professores.id });
        setIsUpdated(false);
    }

    // Manipulador de evento para o clique no botão de exclusão
    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    };

    // Manipulador de evento para a confirmação da exclusão
    const handleConfirmDelete = () => {
        setShowDeleteConfirmation(false);
        props.removeProfessor();
    };

    return (
        <>
            <Card sx={{ mb: 3, p: 3, bgcolor: "light" }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Professor:</strong>{" "}
                                {props.professores.nomeProfessor}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Estado:</strong>{" "}
                                {props.professores.estado}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Cidade:</strong>{" "}
                                {props.professores.cidade}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Disciplina Ofertada:</strong>{" "}
                                {props.professores.disciplina}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Quantidade de Aulas:</strong>{" "}
                                {props.professores.aulas}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                <strong>Quantidade de Faltas:</strong>{" "}
                                {props.professores.faltas}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="flex-end">
                        {/* Botão para baixar o PDF */}
                        <Grid item xs={0.3}></Grid>
                        {/* Botão para editar a turma */}
                        <Button
                            variant="outlined"
                            onClick={() => setIsUpdated(true)}
                        >
                            Editar
                        </Button>
                        <Grid item xs={0.3}></Grid>
                        {/* Botão para apagar a turma */}
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleDeleteClick}
                        >
                            Apagar
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
            {/* Modal para editar a turma */}
            <Modal
                show={isUpdated}
                onHide={() => setIsUpdated(false)}
                centered={true}
                className="centered-modal"
            >
                <Modal.Header>
                    <Modal.Title>
                        Editar Professor:{props.professores.nomeProfessor}
                    </Modal.Title>
                </Modal.Header>
                <Form
                    noValidate
                    onSubmit={handleSubmit(editProfessor)}
                    validated={!!errors}
                >
                    <Modal.Body>
                        {/* Componente de entrada de dados para o nome da turma */}
                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.nomeProfessor}
                            label="Nome da Professor"
                            placeholder="Insira o nome da Professor"
                            required={true}
                            name="nomeProfessor"
                            error={errors.nomeProfessor}
                            validations={register("nomeProfessor", {
                                required: {
                                    value: true,
                                    message: "Nome da turma é obrigatório.",
                                },
                            })}
                        />
                        {/* Componente de entrada de dados para o tipo de ensino */}
                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.estado}
                            label="Estado do Brasil"
                            placeholder="Insira o Estado"
                            required={true}
                            name="estado"
                            error={errors.estado}
                            validations={register("estado", {
                                required: {
                                    value: true,
                                    message:
                                        "O tipo de professor é obrigatório.",
                                },
                            })}
                        />
                        {/* Componente de entrada de dados para a carga horária */}
                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.cidade}
                            label="Cidade do Estado"
                            placeholder="Insira a carga Horária"
                            required={true}
                            name="cidade"
                            error={errors.cidade}
                            validations={register("cidade", {
                                required: {
                                    value: true,
                                    message: "Cidade é obrigatório.",
                                },
                            })}
                        />

                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.disciplina}
                            label="Nome da Disciplina"
                            placeholder="Insira a disciplina"
                            required={true}
                            name="disciplina"
                            error={errors.disciplina}
                            validations={register("disciplina", {
                                required: {
                                    value: true,
                                    message: "Cidade é obrigatório.",
                                },
                            })}
                        />

                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.aulas}
                            label="Quantidade de Aulas"
                            placeholder="Insira a carga Horária"
                            required={true}
                            name="aulas"
                            error={errors.aulas}
                            validations={register("aulas", {
                                required: {
                                    value: true,
                                    message: "aulas é obrigatório.",
                                },
                            })}
                        />
                        <Input
                            className="mb-3"
                            type="text"
                            defaultValue={props.professores.faltas}
                            label="Quantidade de Faltas"
                            placeholder="Insira as faltas"
                            required={true}
                            name="faltas"
                            error={errors.faltas}
                            validations={register("faltas", {
                                required: {
                                    value: true,
                                    message: "faltas é obrigatório.",
                                },
                            })}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Botão para confirmar a edição */}
                        <Button variant="primary" type="submit">
                            Editar
                        </Button>
                        {/* Botão para fechar o modal */}
                        <Button
                            variant="secondary"
                            onClick={() => setIsUpdated(false)}
                        >
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            {/* Modal de confirmação de exclusão */}
            <DeleteConfirmationModal
                show={showDeleteConfirmation}
                onHide={() => setShowDeleteConfirmation(false)}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
}
