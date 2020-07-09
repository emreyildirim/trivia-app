import React from 'react';
import Question from './Question'
import Answer from './Answer';
import '../../../src/card.min.css';
const Card = (props) => {

    return (
    
        <div className = "card" >
        <Question className="question" question = { props.question }/>  
        <Answer className="answer" incorrect_answers = { props.incorrect_answers }
        correct_answer = { props.correct_answer }
        onCorrect = { props.onCorrect }
        onIncorrect={props.onIncorrect}
        />  
        </div>
    )
}

export default Card;