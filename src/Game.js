import React, { useState, useEffect, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Card from "./Components/QuestionCard/Card";
import ScoreScreen from "./Components/ScoreScreen";
import Wrong from "./Components/Wrong";
import "mobx-react-lite/batchingForReactDom";
import './game.min.css';
import Lottie from "react-lottie";
import animationData from "./lotties/timeover"

  function Game({ store }) {

  const [questions,setQuestions] = useState([]);
  const [currentQuestion,setCurrentQuestion] = useState([]);
  const [status, setStatus] =  useState(0);
  const [counter, setCounter] = useState(60);


  useEffect(() =>  {
     fetch(
      'https://opentdb.com/api.php?amount=50&category='+ store.category +'&difficulty='+store.difficulty +'&type=multiple'
    )
 
     .then((res) =>  res.json())
      .then((data) => { 
        setQuestions(data.results);
       setCurrentQuestion(data.results[0])
      });
      
  }, [store.category,store.difficulty]);

  useEffect(()=>{
    store.setQuestions(questions)
   },[questions, store])

  const nextQuestion = () => {
    const currentquestion =  store.questions[Math.floor(Math.random() * store.questions.length)];
  setCurrentQuestion(currentquestion);
  }
  
  store.setCurrentQuestion(currentQuestion)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  if(status===0 && counter===0){
    setStatus(status+3);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

 if(status===0 && store.currentQuestion===undefined){
  return (
    <Fragment>  
      <div className="error">
        <h2>
    Oops!! ... We forgot to take our questions You can start your game by pressing F5 ... Good luck ... :)
        </h2>  
      </div>
    </Fragment>
  );
}
if(status===0 ){
  return (
    <Fragment>  
      <Card  
       onCorrect={() => {setStatus(status + 1);}}
       onIncorrect={() => {setStatus(status -1);}}
        question={store.currentQuestion.question}
        correct_answer={store.currentQuestion.correct_answer}
        incorrect_answers={store.currentQuestion.incorrect_answers}
      />
      <div className="counter-container">
        <div className="counter">{counter} </div> 
      </div>
    </Fragment>
  );
}
if(status===3 && counter===0){
  return(
  <Fragment>
    <div className="time-over">
    <div>
        <Lottie options={defaultOptions} height={150} width={150} />
    </div>
    <div className="time">Time Over ! Total Point:{store.score}</div>
    </div>
    <span className="bottom"> 
      <button className="again" onClick={() => {window.location.reload(true); store.scoreReset();}}>Play Again</button>
      <button className="go-home"><a href="/">Go Homa Page </a></button>
    </span>
 </Fragment>
  );
}

 if(status===1){
  return(
  <Fragment >
  <ScoreScreen onClick={nextQuestion}/>
  <div className="nextquestion">
  <button  onClick={() => {setStatus(status - 1); nextQuestion();store.setScore();}}>
    Next Question
  </button>
  </div>
 </Fragment>
  );
}

if(status===-1){
  return(
  <Fragment>
    <Wrong></Wrong>
    <div className="try-again">
     <button className="again" onClick={() => {window.location.reload(true); store.scoreReset();}}>
      Try Again
     </button> 
     <button className="go-home" ><a href="/">Home </a></button>
    </div>
 </Fragment>
  );
}

}
export default inject('store')(observer(Game));