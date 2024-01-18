import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { loginUser } from "../services/user-services";

const defaultTheme = createTheme();

export function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    // Estado para armazenar o resultado do login
    //eslint-disable-next-line
    const [result, setResult] = useState(null);

    // Navegação
    const navigate = useNavigate();

    // Função para lidar com o envio do formulário de login
    const onSubmit = async (data) => {
        try {
            // Chama a função 'loginUser' para fazer o login do usuário
            const user = await loginUser(data);

            // Define o resultado do login e navega para a página inicial
            setResult(user);
            navigate("/home");
        } catch (error) {
            // Em caso de erro, define o resultado com a mensagem de erro
            setResult({
                title: "Houve um erro no login!",
                message: error.response.data.error,
            });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://source.unsplash.com/random?wallpapers)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <TextField
                                    fullWidth
                                    label="E-mail" // Rótulo do campo de entrada de e-mail
                                    variant="standard" // Estilo do campo de entrada
                                    type="email" // Tipo de entrada de e-mail
                                    {...register("email", {
                                        // Configuração do react-hook-form para o campo de e-mail
                                        required: "E-mail é obrigatório", // Mensagem de erro se o campo estiver vazio
                                        pattern: {
                                            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, // Expressão regular para validar o formato do e-mail
                                            message: "E-mail inválido!", // Mensagem de erro se o formato for inválido
                                        },
                                    })}
                                    error={!!errors.email} // Define um erro se houver erro no campo de e-mail
                                    helperText={errors.email?.message} // Exibe a mensagem de erro abaixo do campo de e-mail
                                    sx={{ height: "60px", mb: 2, mt: -1 }} // Estilo personalizado para o campo de e-mail
                                />
                                <TextField
                                    fullWidth
                                    label="Senha" // Rótulo do campo de entrada de senha
                                    variant="standard" // Estilo do campo de entrada
                                    type="password" // Tipo de entrada de senha
                                    {...register("password", {
                                        // Configuração do react-hook-form para o campo de senha
                                        required: "Senha é obrigatória", // Mensagem de erro se o campo estiver vazio
                                    })}
                                    error={!!errors.password} // Define um erro se houver erro no campo de senha
                                    helperText={errors.password?.message} // Exibe a mensagem de erro abaixo do campo de senha
                                    sx={{ height: "60px" }} // Estilo personalizado para o campo de senha
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
                                        "&:hover": {
                                            backgroundColor: "#ff1414",
                                        },
                                    }}
                                >
                                    Entrar
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            to="/register"
                                            variant="body2"
                                            style={{ color: "black" }}
                                        >
                                            Esqueceu a senha?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            to="/register"
                                            variant="body2"
                                            style={{ color: "black" }}
                                        >
                                            {"Não tem conta? Cadastre-se"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
