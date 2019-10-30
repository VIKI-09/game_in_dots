import React from 'react';
import './Cell.css';
import Cell from './Cell'
export default props  => {
  return (
      <div >
       {
         props.data.map((datarow) =>
         <div  className='playfield-row' key={props.data.indexOf(datarow)}>
            {
                 datarow.map((dataitem) =>
                    <Cell
                          key={dataitem.x * datarow.length + dataitem.y}
                          onClick={() =>props.onClick(dataitem.x, dataitem.y)}
                          value={dataitem.value}
                         />
                   )
                 }
                 </div>
                 )
       }
      </div>
  );
}
