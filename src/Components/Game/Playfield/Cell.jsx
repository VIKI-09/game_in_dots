import React from 'react';
import './Cell.css';


export default function Cell(props) {
  const {onClick, value} = props;
  const classes = ['cell-def'];
  if(value ==='green'){
    classes.push('clicked-cell')
  }else if(value ==='red'){
    classes.push('failed-cell')
  }else if(value === 'active'){
    classes.push('active-cell')
  }

  return (
    <div
      onClick={ value === 'default'? onClick : null}
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
