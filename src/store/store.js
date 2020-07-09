import { observable,decorate,action} from 'mobx';

export class gameStore{
  difficulty='';
  category='';
  score=100;
  questions=[];
  currentQuestion=[];

  setScore (){
    this.score+=100
  }
  scoreReset(score){
    score=0;
  }
  setCurrentQuestion (currentQuestion){
    this.currentQuestion=currentQuestion;
  }
   setQuestions(questions) {
    this.questions=questions;
   }
}

decorate(gameStore,{
    difficulty:observable,
    category:observable,
    score:observable,
    setScore:action,
    scoreReset:action,
    questions:observable,
    setQuestions:action,
    setCurrentQuestion:action
})
const store= new gameStore();
export default store;