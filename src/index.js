import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './containers/mainContainer'
import reportWebVitals from './reportWebVitals';
import Board from './components/chess/board'
import {observe} from './components/chess/game'
ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
// observe((knightPosition) => ReactDOM.render(
//   <Board knightPosition={knightPosition}/>,
//   document.getElementById('root')
// ))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
