import React  from 'react';
import './app.min.css';
import Difficulty from './Components/Difficulty';
import Category from './Components/Category';
import { inject, observer } from 'mobx-react';


function App({store}) {
  
  const handleDifficultyChange = (e) => {
    store.difficulty = e.target.value
  };
  const handleCategoryClick=(e)=>{
    store.category = e.target.value
  }
  return (
    <div className="container">
      <div className="difficulty-container">
      <Difficulty onChange={handleDifficultyChange}/>
      </div>
    <div className="categories">
    <Category className="category-btn" onClick={handleCategoryClick} />
    </div>
 
    
    </div>
  );
}

export default inject('store')(observer(App));
