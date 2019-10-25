import React from 'react';
import './App.css';
import Playfield from './Game/Playfield'
// import Cell from './Components/Cell';
import Header from './Layouts/Header'
import Game from './Game'

// function renderCell(i){
//   return(
//     <Cell
//      value={this.state.squares[i]}
//      onClick={() => this.handleClick(i)}
//    />
//   )
// }

function App() {
const data = {
  field: 5,
  delay: 2000
}

  return (
    <div className="App">
      <Header />
      <Game />

    </div>
  );
}

export default App;
