import React,{Fragment, Component} from 'react';
import './Cell.css';
import Cell from './Cell'
import Grid from '@material-ui/core/Grid';

export default class extends Component  {

state= {
  playfieldData: this.initPlayfieldData(this.props.gameData.field),
  gameStatus: this.props.isPlaying,
  scoreCounter: {
    user: 0,
    computer: 0
  }
};

initPlayfieldData(field){
 let data = [];
 for (let i = 0; i < field; i++) {
     data.push([]);
     for (let j = 0; j < field; j++) {
         data[i][j] = {
             x: i,
             y: j,
             value: 'default'
         };
        }
      }
    return data;
  };

   renderPlayfield(data){
     return (

       data.map((datarow) =>
       <Grid item className='playfield-row' key={data.indexOf(datarow)}>
          {
               datarow.map((dataitem) =>
                  <Cell
                        key={dataitem.x * datarow.length + dataitem.y}
                        onClick={() =>this.handleClick(dataitem.x, dataitem.y)}
                        value={dataitem.value}
                       />
                 )
               }
               </Grid>
               )
             )
   }


   handleClick(x, y) {
    let updatedData = this.state.playfieldData;
    updatedData[x][y].value = 'green';
    this.setState(
      {playfieldData: updatedData}
    )
     }









   render() {
         return (
             <div>
              {
                this.renderPlayfield(this.state.playfieldData)
              }
             </div>
         );
     }


}



//-----------------OLD_COMPONENT____________________

//   function getRandomCellIndex(arr){
//     let newArr=[]
//     arr.forEach((item, i)=> {if(item === '0'){ newArr.push(i)} })
//     let index = newArr[Math.floor(Math.random()*newArr.length)];
//     return index
//   }
//
//
//
// //
//   function activator(arr, delay){
//
// let cells = state.cells.slice();
//   let timerId = setTimeout(function go() {
//        const index = getRandomCellIndex(arr)
//        console.log('INDEX ' + index);
//         // cells = state.cells.slice();
//        console.log(cells);
//        cells[index] = '1';
//        console.log(cells);
//        console.log('----------------------------------');
//        setState({cells: cells});
//        timerId =  setTimeout(go, delay)
//   }, delay)
//
// }
// console.log('___________-NEW RENDER______________________');
//   if(props.status){
//     activator(state.cells, props.delay);
//   }
