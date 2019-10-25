import React,{Fragment} from 'react';
import '../App.css';
import Cell from './Cell'
import Grid from '@material-ui/core/Grid';

export default function Playfield(props){
    const rowCount = 10;
  const colCount = 10;
  return (
    <Grid container
          justify='center'>
      {[...new Array(rowCount)].map((x, rowIndex) => {
        return (
          <Grid item className="playfied-row" key={rowIndex}>
            {[...new Array(colCount)].map((y, colIndex) => <Cell key={colIndex} val={rowIndex*colCount + colIndex} onChange={props.cellClick} />  )}
          </Grid>
        )
      })
      }
    </Grid>
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
