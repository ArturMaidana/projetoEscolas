import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// Importações de componentes personalizados
import { registerUser } from "../services/user-services";

const defaultTheme = createTheme();

export function Register() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    //eslint-disable-next-line
    const [result, setResult] = useState(null);

    // Navegação
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário de registro
    const onSubmit = async (data) => {
        try {
            // Chama a função 'registerUser' para registrar o usuário
            const user = await registerUser(data);

            // Define o resultado do registro e navega para a página inicial
            setResult(user);
            navigate("/home");
        } catch (error) {
            // Em caso de erro, define o resultado com a mensagem de erro
            setResult({
                title: "Houve um erro no cadastro!",
                message: error.response.data.error,
            });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Criar Conta
                    </Typography>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <TextField
                                fullWidth
                                label="Nome"
                                variant="standard"
                                {...register("nome", {
                                    required: "Nome é obrigatório",
                                })}
                                error={!!errors.nome}
                                helperText={errors.nome?.message}
                                sx={{ height: "60px" }}
                            />
                            <TextField
                                fullWidth
                                label="Estado"
                                variant="standard"
                                {...register("estado", {
                                    required: "Estado é obrigatório",
                                })}
                                error={!!errors.estado}
                                helperText={errors.estado?.message}
                                sx={{ height: "60px" }}
                            />
                            <TextField
                                fullWidth
                                label="Cidade "
                                variant="standard"
                                {...register("cidade", {
                                    required: "Cidade é obrigatório",
                                })}
                                error={!!errors.cidade}
                                helperText={errors.cidade?.message}
                                sx={{ height: "60px" }}
                            />
                            <TextField
                                fullWidth
                                label="E-mail"
                                variant="standard"
                                type="email"
                                {...register("email", {
                                    required: "E-mail é obrigatório",
                                    pattern: {
                                        value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                                        message: "E-mail inválido!",
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                sx={{ height: "60px", mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Senha"
                                variant="standard"
                                type="password"
                                {...register("password", {
                                    required: "Senha é obrigatória",
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                sx={{ height: "60px" }}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Lembrar-me"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    height: "50px",
                                    mt: 2,
                                    "&:hover": { backgroundColor: "#4504f6" },
                                }}
                            >
                                Cadastrar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        to="/reset"
                                        variant="body2"
                                        style={{ color: "black" }}
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/" style={{ color: "black" }}>
                                        {"Já tem conta? Faça o login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
