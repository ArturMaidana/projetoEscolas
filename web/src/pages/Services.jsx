// Importações de bibliotecas e componentes React
import {
    FaChartBar,
    FaUsers,
    FaChalkboardTeacher,
    FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Style/Home.css"; // Importe um arquivo CSS para estilização
import { NavBar } from "../components/NavBar";

// Definição do componente 'Home'
export function Services() {
    return (
        <div>
            <NavBar />
            <div className="container-margin">
                <div className="main-content">
                    <hr /> {/* Adiciona uma linha horizontal */}
                    <h2>Painel de Serviços</h2>
                    <div className="icon-blocks">
                        {/* Links para diferentes páginas da aplicação */}
                        <Link
                            to="/dashboard"
                            className="icon-block"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <FaChartBar size={64} />
                            <p>Dashboard</p>
                        </Link>
                        <Link
                            to="/turmas"
                            className="icon-block"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <FaChalkboardTeacher size={64} />
                            <p>Turmas</p>
                        </Link>
                        <Link
                            to="/alunos"
                            className="icon-block"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <FaUserGraduate size={64} />
                            <p>Alunos</p>
                        </Link>
                        <Link
                            to="/usuarios"
                            className="icon-block"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <FaUsers size={64} />
                            <p>Usuários</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
