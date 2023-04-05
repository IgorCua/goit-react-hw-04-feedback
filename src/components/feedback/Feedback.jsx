import PropTypes from "prop-types";
import React, { useState } from "react";
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";


export const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState(
        {
            good: 0,
            neutral: 0,
            bad: 0
        }
    )

    const countTotalFeedback = () => {
        const {good, neutral, bad} = feedbacks;
        return neutral + bad + good;
    }

    const countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = feedbacks;
        let feedbackSum = neutral + bad + good;

        return (good > 0 && feedbackSum > 0) ? `${Math.floor(good / feedbackSum * 100)}%` : 0;
    }
    // console.log(feedbacks)
        return (
            <Section title='Please leave feedback'>
                <FeedbackOptions 
                    feedbacks={feedbacks}
                    setFeedbacks={setFeedbacks}
                />    
                <Statistics 
                    feedbacks={feedbacks}
                    countTotalFeedback={countTotalFeedback} 
                    countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                />
            </Section>
        )
    }

Section.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
}