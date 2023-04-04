import style from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return(
        <div className={style.buttons}>
            <button type="button" className={style.btn} onClick={onLeaveFeedback}>Good</button>
            <button type="button" className={style.btn} onClick={onLeaveFeedback}>Neutral</button>
            <button type="button" className={style.btn} onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
}