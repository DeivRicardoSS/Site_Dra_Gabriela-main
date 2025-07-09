import ebookIcon from "../../assets/ebookIcon.svg";
import balao from "../../assets/balaoEbook.svg";
import styles from "./styles.module.css";
import imgConvite from "../../assets/convite.png"
export function Ebook() {
    return (
        <section className={styles.container} style={{backgroundImage: `url(${imgConvite})`}}>
            <div className={styles.content}>
                <img src={balao} alt="" className={styles.balao}/>
                <a href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-cuidados-da-pele-kpu96/E99936284F">
                    <img src={ebookIcon} alt="ebook" />
                </a>
            </div>
        </section>
    );
}