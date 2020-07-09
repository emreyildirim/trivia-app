import React, { Fragment } from "react";

const Answer =  (props) => {

 const Answers=[];
 
if(props.incorrect_answers !== undefined){
    props.incorrect_answers.map((incorrect)=>{
      return  Answers.push(incorrect)
     } 
    );
Answers.push(props.correct_answer)
}

return( 
<Fragment> 
{Answers.sort().map((answers) =>(
    <button value={answers} className="answers"  onClick={answers===props.correct_answer ?(props.onCorrect):(props.onIncorrect)}> {answers} </button>
))}
</Fragment>
);
}
export default Answer;