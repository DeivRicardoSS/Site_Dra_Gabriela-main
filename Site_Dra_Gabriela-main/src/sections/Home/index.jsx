import homeImg from "../../assets/homeImg.png";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";


export function Home() {
    return (
        <section className={styles.container} id="home">
            <img src={homeImg} alt="home" />

            <div>
                <h2>Dermatologia clínica, estética e capilar com abordagem personalizada.</h2>
                <span>Sua pele e cabelos tratados com excelência dermatológica</span>
                <Button style={{ marginTop: "4rem", width: "400px",fontSize: "25px", height: "70px", fontWeight: "semi-bold" }} link="https://api.whatsapp.com/send?phone=558130364040&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20agendamento%20para%20dermatologista%20Dra%20Gabriela%20Figueir%C3%B4a.">Agende sua Consulta</Button>
            </div>
            
            
        </section>
    )
}