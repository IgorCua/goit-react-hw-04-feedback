import style from "./Statistics.module.css";

export const Statistics = (props) => {
    const {good, neutral, bad} = props.state;
    const {countTotalFeedback, countPositiveFeedbackPercentage} = props;
    
    return (
        <div className={style.stat}>
            <h2 className={style.title}>Statistics</h2>
            {countTotalFeedback() > 0 ? (
                <div className={style.isHidden}>
                    <p className={style.item}>Good: {good}</p>
                    <p className={style.item}>Neutral: {neutral}</p>
                    <p className={style.item}>Bad: {bad}</p>
                    <p className={style.totalFb}>Total: {countTotalFeedback()}</p>
                    <p className={style.positiveFb}>Psotive feedback: {countPositiveFeedbackPercentage()}</p>
                </div>
                ) 
                : (<h2>No feedback Given</h2>)}
        </div>
    )
}