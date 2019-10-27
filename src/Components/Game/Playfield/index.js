import React,{Fragment, useState} from 'react';
import './Cell.css';
import Cell from './Cell'
import Grid from '@material-ui/core/Grid';

export default props => {
 const [state, setState] = useState({cells: Array(100).fill(0)})
  const rowCount = 10;
  const colCount = 10;
function   handleClick(i) {
    const cells = state.cells.slice();
    cells[i] = '1';
    setState({cells: cells});
  }
//  function getRandom(length){
//   return  Math.floor((Math.random() * 1000) + 1) % length

  // let cell = document.getElementById(getRandom(state.cells.length))
  // console.log(cell)

  return (
    <Fragment>
      {[...new Array(rowCount)].map((x, rowIndex) => {
        return (
          <Grid item className="playfied-row " key={rowIndex}>
            {[...new Array(colCount)].map((y, colIndex) =>
               <Cell key={colIndex}
                     id={rowIndex*colCount + colIndex}
                     onClick={() =>handleClick(rowIndex*colCount + colIndex)}
                     value={state.cells[rowIndex*colCount + colIndex]}
                    />
               )}
          </Grid>
        )
      })
      }
    </Fragment>
  );
}
