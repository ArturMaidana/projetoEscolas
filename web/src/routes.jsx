import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//import { Login } from "./pages/Login";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Turmas } from "./pages/Turmas";
import { Alunos } from "./pages/Alunos";
import { Professores } from "./pages/Professores";
import { Dashboard } from "./pages/Dashboard";
import { ProfilePage } from "./pages/ProfilePage";
import { Services } from "./pages/Services";

import { isAuthenticated } from "./utils/is-authenticated";
import { Home } from "./pages/Home";
import { FormularioTurma } from "./components/Formularios/FormularioTurmas";
import { FormularioProfessor } from "./components/Formularios/FormularioProfessor";
import { FormularioAluno } from "./components/Formularios/FormularioAlunos";

/**
 * Cria rotas autenticadas
 */
export function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        // Pode trocar para renderizar uma página customizada de não autorizada,
        // nesse caso ele vai voltar para a tela de login
        return <Navigate to="/" replace />;
    }
    return children;
}

export function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/turmas"
                    element={
                        <PrivateRoute>
                            <Turmas />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/turmas/formulario"
                    element={
                        <PrivateRoute>
                            <FormularioTurma />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/alunos"
                    element={
                        <PrivateRoute>
                            <Alunos />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/alunos/formulario"
                    element={
                        <PrivateRoute>
                            <FormularioAluno />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/Professores"
                    element={
                        <PrivateRoute>
                            <Professores />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/Professores/formulario"
                    element={
                        <PrivateRoute>
                            <FormularioProfessor />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/Services"
                    element={
                        <PrivateRoute>
                            <Services />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
