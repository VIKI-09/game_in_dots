import React,{Fragment, useState} from 'react';
import './Cell.css';
import Cell from './Cell'
import Grid from '@material-ui/core/Grid';

export default props => {

 const [state, setState] = useState({cells: Array(Math.pow(3, 2)).fill('0')})
 const [timer, setTimer] = useState()
  const rowCount = 3;
  const colCount = 3 ;

  function getRandomCellIndex(arr){
    let newArr=[]
    arr.forEach((item, i)=> {if(item === '0'){ newArr.push(i)} })
    let index = newArr[Math.floor(Math.random()*newArr.length)];
    return index
  }



//
  function activator(arr, delay){


      const index = getRandomCellIndex(arr)

      const cells = state.cells.slice();
      console.log(cells);
      cells[index] = '1';
      console.log(cells);
      setState({cells: cells});



      const timerId = setTimeout(() =>{ const cells = state.cells.slice();
      setTimer(timerId)
      if(state.cells[index] === '1'){
        cells[index] = '3';
        setState({cells: cells});

      }
    },delay)
  }

  if(props.state){
    props.state = false;
    console.log('START GAME!!!', Date.now());
    activator(state.cells, props.delay);
  }





  function   handleClick(i) {
      const cells = state.cells.slice();
      cells[i] = '2';
      setState({cells: cells});
    }

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
