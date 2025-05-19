import styles from "./styles.module.css";
import aboutImg from "../../assets/aboutImg.jpg";
import aspas from "../../assets/aspas.svg";
export function About() {
    return (
        <section className={styles.container} id="about">
            <img src={aboutImg} className={styles.img} alt="Dra Gabriela" />

            <div className={styles.content}>
                <div>
                    <h2>Conheça a Dra. Gabriela</h2>
                    <span>CRM: 24049-PE </span>
                </div>

                <div className={styles.text}>
                    <img src={aspas}/>
                    <p>
                        Sou Gabriela Figueirôa Melo, médica formada pela FPS/IMIP (Recife-PE), especializada em Dermatologia pela Famene (João Pessoa-PB), com revalidação em Portugal pela Universidade Clássica de Lisboa. Atuo na Clínica Skinprime (Recife-PE) e sou especialista em Tricologia, Transplante Capilar e Estética Facial, além de palestrante de Fios de PDO (Polidioxanona). Realizei intercâmbio de pesquisa no Instituto de Investigação em Ciências da Vida e Saúde (ICVS) e estágios no Hospital de Braga e no Hospital de Santa Maria, em Lisboa. Ministro treinamentos em Fios de PDO pela EVOPharma no Nordeste, além de cursos intensivos de terapia capilar e estética facial com prática em pacientes modelo. Sou membro da Sociedade Brasileira de Dermatologia (SBD) e me mantenho sempre atualizada para oferecer técnicas avançadas e resultados naturais aos meus pacientes.”
                    </p>
                </div>
            </div>
        </section>
    )
}