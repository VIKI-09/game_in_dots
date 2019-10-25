import React from 'react';
import '../App.css';


export default function Cell(props) {

  return(
    <button className='cell-def' onClick={props.onChange}>
    </button>
  )
}
