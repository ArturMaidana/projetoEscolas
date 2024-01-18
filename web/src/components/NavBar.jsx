import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../Style/navbar.css";

export function NavBar() {
    const [nav, setNav] = useState(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);

        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []); // Adiciona o event listener apenas uma vez no componentDidMount

    const handleLogoutClick = () => {
        setShowLogoutConfirmation(true);
    };

    const handleConfirmLogout = () => {
        // Implemente a lógica de logout aqui, como remover tokens ou fazer logout do usuário
        // Neste exemplo, apenas remove o token de sessão
        sessionStorage.removeItem("token");
        // Feche o modal de confirmação após o logout
        setShowLogoutConfirmation(false);
        window.location.href = "/";
    };

    return (
        <>
            <nav className={nav ? "nav active" : "nav"}>
                <ul className="menu">
                    <li>
                        <Link to="/home">Gestão Escolar</Link>
                    </li>
                </ul>
                <Link to="#" className="logo"></Link>
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <Link to="/home">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Services">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/About">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Perfil</Link>
                    </li>
                    <li>
                        <Link onClick={handleLogoutClick}>Sair</Link>
                    </li>
                </ul>
            </nav>

            <Modal
                show={showLogoutConfirmation}
                onHide={() => setShowLogoutConfirmation(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza de que deseja sair?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowLogoutConfirmation(false)}
                    >
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleConfirmLogout}>
                        Sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
