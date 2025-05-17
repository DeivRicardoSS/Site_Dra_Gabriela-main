import homeImg from "../../assets/homeImg.png";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";


export function Home() {
    return (
        <section className={styles.container}>
            <img src={homeImg} alt="home" />

            <div>
                <h2>Dermatologia clínica, estética e capilar com abordagem personalizada.</h2>
                <span>Sua pele e cabelos tratados com excelência dermatológica</span>
                <Button style={{ marginTop: "5rem", width: "400px",fontSize: "25px", height: "70px", fontWeight: "semi-bold" }} link="#">Agende sua Consulta</Button>
            </div>
            
            
        </section>
    )
}