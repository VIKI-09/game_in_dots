import React from 'react';
import './Cell.css';


export default function Cell(props) {
  const {onClick, value} = props;
  const classes = ['cell-def'];
  if(value ==='2'){
    classes.push('clicked-cell')
  }else if(value ==='3'){
    classes.push('failed-cell')
  }else if(value === '1'){
    classes.push('active-cell')
  }

  return (
    <div
      onClick={ value === '1'? onClick : null}
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
