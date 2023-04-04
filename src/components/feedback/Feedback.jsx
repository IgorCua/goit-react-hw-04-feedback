import PropTypes from "prop-types";
import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";


export class Feedback extends Component {

    onLeaveFeedback = (evt) => {
        const elemName = evt.target.textContent.toLowerCase();
        const state = this.props.state;
        
        this.setState({[elemName]: state[elemName] += 1});
    }

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.props.state;
        return neutral + bad + good;
    }

    countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.props.state;
        let feedbackSum = neutral + bad + good;

        return (good > 0 && feedbackSum > 0) ? `${Math.floor(good / feedbackSum * 100)}%` : 0;
    }

    render() {
        return (
            <Section title='Please leave feedback'>
                <FeedbackOptions 
                    onLeaveFeedback={this.onLeaveFeedback}
                />    
                <Statistics 
                    state={this.props.state} 
                    countTotalFeedback={this.countTotalFeedback} 
                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                />
            </Section>
        )
    }
}

Section.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
}