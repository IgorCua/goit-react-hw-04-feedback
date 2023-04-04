import style from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({feedbacks: {good, neutral, bad}, setFeedbacks}) => {
    const chnageFb = (e) => {
        const btnName = e.target.textContent.toLowerCase();
        
        setFeedbacks({
            good: btnName === 'good' ? good + 1 : good,
            neutral: btnName === 'neutral' ? neutral + 1 : neutral,
            bad: btnName === 'bad' ? bad + 1 : bad,
        })
    }
    
    return(
        <div className={style.buttons}>
            <button type="button" className={style.btn} onClick={chnageFb}>Good</button>
            <button type="button" className={style.btn} onClick={chnageFb}>Neutral</button>
            <button type="button" className={style.btn} onClick={chnageFb}>Bad</button>
        </div>
    )
}