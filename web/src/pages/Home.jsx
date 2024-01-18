import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { getProfile } from "../services/user-services";
import { Footer } from "../components/Rodape";
import "../Style/Home.css";
import taskGif from "../Style/task.gif";

export function Home() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getProfile();

                if (response) {
                    setUserName(response.nome);
                } else {
                    console.error("Response from getProfile is null");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container-margin">
                <div className="main-content">
                    <div className="header-section">
                        <div className="text-section">
                            {/* Exibindo o nome do usuário */}
                            <p className="home-text">
                                Olá <strong>{userName}</strong>, seja bem-vindo
                                ao gerenciamento escolar de Mato Grosso. Somos
                                uma equipe determinada em facilitar a
                                organização de turmas, alunos e professores.
                            </p>
                            {/* Adicionando a frase e o botão */}
                            <div className="services-section">
                                <p className="home-text">
                                    Confira alguns dos nossos serviços
                                </p>
                                <Link to="/Services" className="header-btn">
                                    Serviços
                                </Link>
                            </div>
                        </div>
                        <img src={taskGif} alt="animation" className="gif" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
