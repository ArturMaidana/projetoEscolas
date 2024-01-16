import React, { useEffect, useState } from "react";
import { getProfile } from "../services/user-services"; // Certifique-se de ter este serviço implementado
import { NavBar } from "../components/NavBar";
import "../Style/Home.css";

export function ProfilePage() {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getProfile();

                if (response) {
                    setUserProfile(response);
                } else {
                    console.error("Response from getProfile is null");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                // Lida com erros (pode redirecionar para outra página, exibir uma mensagem de erro, etc.)
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="container-margin">
            <NavBar />
            <h4> Informações do Usuário</h4>
            {userProfile ? (
                <div className="container-margin">
                    <p>Nome: {userProfile.nome}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>Estado: {userProfile.estado}</p>
                    <p>Cidade: {userProfile.cidade}</p>
                    <button>Editar</button>
                    <button>Voltar</button>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}
