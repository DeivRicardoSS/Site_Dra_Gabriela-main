import styles from "./styles.module.css";

export function Photos({photos}) {
    return (
        <section className={styles.container}>
            {
                photos.map((photo) => (
                    <img src={photo} alt="imagem" />
                ))
            }
        </section>
    );
}