import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { InstagramLogo, FacebookLogo, LinkedinLogo } from "phosphor-react";
export function Footer() {
    return (
        <footer className={styles.container}>
            <img src={logo} alt="logo" />

            <div className={styles.content1}>
                <div>
                    <strong>Endereço</strong>
                    <span>
                        Torre C, Riomar Trade Center - Av. República do Líbano, número 251 - sala 1905 - Pina, Recife - PE, 50110-160
                    </span>
                </div>

                <div>
                    <strong>Redes Sociais</strong>
                    <span>
                        <a href="#">
                            <InstagramLogo size={32} weight="fill" />
                        </a>
                        <a href="#">
                            <FacebookLogo size={32} weight="fill" />
                        </a>
                        <a href="#">
                            <LinkedinLogo size={32} weight="fill" />
                        </a>
                    </span>
                </div>
            </div>

            <div className={styles.content2}>
                <div>
                    <strong>Horário de Functionamento</strong>
                    <span>
                        Segunda a Sexta – 09h às 21h
                        Sábado – 08:00 às 12:00
                        Domingo – Fechado
                    </span>
                </div>

                <div>
                    <strong>Responsável Técnico</strong>
                    <span>
                        Dra. Gabriela Figueiroa Melo CRM: 24049-PE
                    </span>
                </div>
            </div>
            
            <div className={styles.content3}>
                <div>
                    <strong>Contato</strong>
                    <div>
                        <a>(81) 3036-4040</a>
                        <a>(81) 98111-2323</a>
                    </div>
                </div>

                <div>
                    <strong>Email</strong>
                    <a href="gabriela_figueiroa@hotmail.com" target="_blank">gabriela_figueiroa@hotmail.com</a>
                </div>
            </div>
        </footer>
    );
}