import styles from "./styles.module.css";

export function CardService({icon, title, children}) {
    return (
        <article className={styles.container}>
            <div>
                <img src={icon} alt="icone" />
                <h4>{title}</h4>
            </div>
            <ul>
                {children}
            </ul>
        </article>
    );
}