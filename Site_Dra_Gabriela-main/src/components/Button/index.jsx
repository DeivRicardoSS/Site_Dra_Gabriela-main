import styles from "./styles.module.css";

export function Button({children,style, link}) {
    return (
        <a style={style} className={styles.container} href={link}>{children}</a>
    )
}