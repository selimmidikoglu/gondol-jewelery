import React from "react";
import ReactDOM from "react-dom";
import Knight from '../chess/knight'
import Square from '../chess/square'
import Board from '../chess/board'
const Home2 = () => {
  return (
    <Board knightPosition={[1,0]}/>
  );
};

export default Home2;
