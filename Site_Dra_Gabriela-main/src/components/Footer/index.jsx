import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { InstagramLogo, FacebookLogo, LinkedinLogo, CaretCircleUp } from "phosphor-react";
export function Footer() {
    return (
        <footer className={styles.container}>
            <img src={logo} alt="logo" />

            <div className={styles.content1}>
                <div>
                    <strong>Endereço</strong>
                    <a href="https://www.google.com/maps/place/Skin+Prime/@-8.0868644,-34.8920545,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab19a4c52b0ab5:0xddfe15f4a60d137a!8m2!3d-8.0868644!4d-34.8920545!16s%2Fg%2F11qp9qmt0q?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                        Torre C, Riomar Trade Center - Av. República do Líbano, número 251 - sala 1905 - Pina, Recife - PE, 50110-160
                    </a>
                </div>

                <div>
                    <strong>Redes Sociais</strong>
                    <span className={styles.redes}>
                        <a href="https://www.instagram.com/gabrielafigueiroadermatorecife/">
                            <InstagramLogo size={48} weight="fill" />
                        </a>
                        <a href="https://www.facebook.com/people/Dra-Gabriela-Figueir%C3%B4a/100069716415027/">
                            <FacebookLogo size={49} weight="fill" />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriela-figueiroa-0b00b825b/">
                            <LinkedinLogo size={48} weight="fill" />
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
                        Dra. Gabriela Figueiroa Melo <br/>CRM: 24049-PE
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

            <a href="#home" className={styles.backtohome}>
                <CaretCircleUp size={80}/>
            </a>
        </footer>
    );
}