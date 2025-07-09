import styles from "./styles.module.css";
import quote1 from "../../assets/quote1.jpg";
import quote2 from "../../assets/quote2.jpg";
import quote3 from "../../assets/quote3.jpg";
import aspas from "../../assets/aspas.svg";
export function Quote() {
    return (
        <section className={styles.container}>
            <div className={styles.images}>
                <img src={quote1} alt="imagem 2" />
                <img src={quote2} alt="imagem 1" className={styles.destaque}/>
                <img src={quote3} alt="imagem 3" />
            </div>

            <div className={styles.content}>
                <img src={aspas}/>
                <p>
                    “Cada pele é única, e meu compromisso é proporcionar um atendimento individualizado, com atenção aos detalhes e foco na sua saúde, beleza e bem-estar. Desenvolvo tratamentos dermatológicos — clínicos e estéticos — com responsabilidade, conhecimento e um cuidado genuíno voltado às suas necessidades."
                </p>
            </div>
        </section>
    );
}