import Logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";

export function Header() {
    return(
        <header className={styles.container}>
            <a href="">
                <img src={Logo} alt="logo" />
            </a>

            <nav>
                <a href="#">Dra. Gabriela Figueirôa</a>
                <a href="#">Especialidades</a>
                <a href="#">Consultório</a>
            </nav>

            <Button link="#">Agendar Consulta</Button>
        </header>
    );
}