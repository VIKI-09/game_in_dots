import React,{Fragment, Component} from 'react';
import './Cell.css';
import Cell from './Cell'
import Grid from '@material-ui/core/Grid';

export default class extends Component  {
  constructor(props){
    super(props);
console.log(props.status);

    if(false){

      console.log('START_________________________-');
      setTimeout(() =>this.cellActivator(this.props.gameData.delay),this.props.gameData.delay)
    }
  }
  state= {
    playfieldData: this.initPlayfieldData(this.props.gameData.field),
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
       <div  className='playfield-row' key={data.indexOf(datarow)}>
          {
               datarow.map((dataitem) =>
                  <Cell
                        key={dataitem.x * datarow.length + dataitem.y}
                        onClick={() =>this.handleClick(dataitem.x, dataitem.y)}
                        value={dataitem.value}
                       />
                 )
               }
               </div>
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

  cellActivator(delay){
     // setTimeout(()=> {

        let currentCell =  this.getRandomCell(this.state.playfieldData, this.props.gameData.field);

        console.log('------------INDEX OF CURRENT CELL-' + currentCell)
        let timerId = setTimeout(()=>{
          if(this.state.playfieldData[currentCell[0]][currentCell[1]].value === 'green'){
            console.log('проверка на GREEEN' );
            clearTimeout(timerId);
            console.log(timerId);
            // setTimeout (()=>this.cellActivator(delay),delay );

          }else{
            let updData = this.state.playfieldData;
            updData[currentCell[0]][currentCell[1]].value = 'red';
            this.setState({playfieldData: updData})
            // setTimeout (()=>this.cellActivator(delay), delay);
          }
          // setTimeout (()=>this.cellActivator(delay), delay)
          this.cellActivator(delay)
        },delay)

      // },delay);

    }

  getRandNumb(limit){
    return Math.floor((Math.random() * 1000) + 1) % limit;
  }

  getRandomCell(data, field){
    let randomX, randomY = 0;
    let updData = this.state.playfieldData;
    randomX = this.getRandNumb(field);
    randomY = this.getRandNumb(field);
    if(!(data[randomX][randomY].value === 'green' || data[randomX][randomY].value === 'red' )){
      updData[randomX][randomY].value = 'active';
      this.setState({playfieldData: updData})
      return [randomX, randomY];
    }else {
      console.log('____ПОПАДАНИЕ НА ОТМЕЧЕНУЮ КЛЕТКУ____');
        let anotherCell = this.getRandomCell(data, field);
      return anotherCell
      }
    }

   render() {
         return (
             <div >
              {
                this.renderPlayfield(this.state.playfieldData)
              }
             </div>
         );
     }
}
