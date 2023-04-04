import style from "./Section.module.css";

export const Section = ({title, children}) => {
    return (
        <section className={style.feedback}>
            <h1 className={style.title}>{title}</h1>
            {children}
        </section>
    )
}