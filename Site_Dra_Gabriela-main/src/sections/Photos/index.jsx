import styles from "./styles.module.css";

export function Photos({photos, id}) {
    return (
        <section className={styles.container}
            id = {id}
        >
            {
                photos.map((photo) => (
                    <img src={photo} alt="imagem" />
                ))
            }
        </section>
    );
}