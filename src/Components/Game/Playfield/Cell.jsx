import React, {useState, useEffect} from 'react';
import './Cell.css';


export default function Cell(props) {
  const {onClick, value} = props;
  const classes = ['cell-def'];
  if(props.value ==='2'){
    classes.push('clicked-cell')
  }else if(props.value ==='3'){
    classes.push('failed-cell')
  }else if(props.value === '1'){
    classes.push('active-cell')
  }





  return (
    <div
      onClick={ props.value === '1'? props.onClick : null}
      className={classes.join(' ')}
    >
    </div>
  );
}











//
//   return(
//     <button className='cell-def' onClick={props.onChange}>
//     </button>
//   )
// }
