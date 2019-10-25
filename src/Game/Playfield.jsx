import React from 'react';
import '../App.css';
import Cell from './Cell'

export default function Playfield(props){
  const rowCount = 5;
  const colCount = 5;
  return (
    <div >
      {[...new Array(rowCount)].map((x, rowIndex) => {
        return (
          <div className="playfied-row" key={rowIndex}>
            {[...new Array(colCount)].map((y, colIndex) => <Cell key={colIndex} val={rowIndex*colCount + colIndex} onChange={props.cellClick} />  )}
          </div>
        )
      })
      }
    </div>
  );
}

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
//
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }
