import React from 'react';
import './Cell.css';


export default function Cell(props) {

  return(
    <button className='cell-def' onClick={props.onChange}>
    </button>
  )
}
