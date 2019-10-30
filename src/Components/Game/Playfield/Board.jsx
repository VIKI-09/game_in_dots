import React from 'react';


export default props => {

    const rowCount = 3;
    const colCount = 3 ;
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
