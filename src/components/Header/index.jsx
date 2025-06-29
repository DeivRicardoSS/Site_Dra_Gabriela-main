import Logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import { MenuIcon } from "../MenuIcon";
import { useState } from "react";

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);


    return(
        <header className={styles.container}>
            <a href="#home">
                <img src={Logo} alt="logo" />
            </a>

            <nav>
                <a href="#about">Dra. Gabriela Figueirôa</a>
                <a href="#services">Especialidades</a>
                <a href="#images">Consultório</a>
            </nav>

            <a href="https://api.whatsapp.com/send?phone=558130364040&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20agendamento%20para%20dermatologista%20Dra%20Gabriela%20Figueir%C3%B4a." className={styles.btncontato}>Agendar Consulta</a>

            <MenuIcon onClick={() => {
                setMenuAberto(!menuAberto);
            }}/>

            <ul className="menu" style={{ display: menuAberto ? "flex" : "none" }}>
                <a href="#about">Dra. Gabriela Figueirôa</a>
                <a href="#services">Especialidades</a>
                <a href="#images">Consultório</a>
            </ul>
        </header>
    );
}