import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";
import './index.min.css';
import App from './App';
import Game from './Game'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import store from './store/store';



function GameRouter(){

  return(
    <Router>
      <div className="navbar">
      <Link to="/"> <button className="router-btn">Home</button></Link>
      <Link to="/Game"> <button className="router-btn">Game</button></Link>
      <button className="router-btn"><a href="https://github.com/emreyildirim">Contact</a></button>
      </div>

      <Switch>
        <Route  path="/Game" component={Game}  />
        <Route exact path="/" component={App}/>
      </Switch>
    </Router>
  )

}


ReactDOM.render(
<Provider store={store}>
<GameRouter />
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. 
serviceWorker.unregister();
