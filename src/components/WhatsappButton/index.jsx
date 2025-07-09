import { WhatsappLogo } from "phosphor-react";
import styles from "./styles.module.css";

export function WhatsappButton() {
    return (
        <a href="https://api.whatsapp.com/send?phone=558130364040&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20agendamento%20para%20dermatologista%20Dra%20Gabriela%20Figueir%C3%B4a." target="_blank" className={styles.container}>
            <WhatsappLogo size={40} weight="regular" />
        </a>
    );
}