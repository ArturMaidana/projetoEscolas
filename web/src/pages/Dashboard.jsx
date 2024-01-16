import React from "react";
import { Graficos } from "../components/Graficos/Barchart";
import "../Style/Home.css"; // Importe um arquivo CSS para estilização

export function Dashboard() {
    return (
        <div className="container-margin">
            <div>
                <div></div>
                <h2>Análise das Turmas</h2>

                <div>
                    <Graficos></Graficos>
                </div>

                {/* Adicione um botão para voltar à página Home */}
            </div>
        </div>
    );
}
