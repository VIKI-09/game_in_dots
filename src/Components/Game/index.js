import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import ControlPanel from './ControlPanel';
import Playfield from './Playfield';
import WinnersList from './WinnersList';

// import axios from 'axios';

const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';


export default class Game extends Component  {

  state = {
    isLoading: true,
    playfieldData: this.initPlayfieldData(10),
    delay: 2000,
    gameMode:{},
    userName: null,
    winner: null,
    isPlaying: false,
    scoreCounter: {
      user: 0,
      computer: 0
    }
}



  setUser(user){
    let updData = this.state;
    updData.userName = user;
    this.setState(updData);
  }

  setGameMode(gameModePreset){
  let updData = this.state
  updData.playfieldData = this.initPlayfieldData(gameModePreset.field);
  updData.delay = gameModePreset.delay
  this.setState(updData)
}

  handleStartClick(){
  setTimeout(() =>{this.cellActivator(this.state.delay)},this.state.delay)
  // let updState = this.state;
  // updState.isPlaying = true;
  // this.setState(updState);

}

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

  // renderPlayfield(data){
  //    return (
  //      data.map((datarow) =>
  //      <div  className='playfield-row' key={data.indexOf(datarow)}>
  //         {
  //              datarow.map((dataitem) =>
  //                 <Cell
  //                       key={dataitem.x * datarow.length + dataitem.y}
  //                       onClick={() =>this.handleClick(dataitem.x, dataitem.y)}
  //                       value={dataitem.value}
  //                      />
  //                )
  //              }
  //              </div>
  //              )
  //            )
  //  }

  handleCellClick(x, y) {
    let updatedData = this.state.playfieldData;
    updatedData[x][y].value = 'green';
    this.setState(
      {playfieldData: updatedData}
    )
     }

  cellActivator(delay){
     // setTimeout(()=> {

        let currentCell =  this.getRandomCell(this.state.playfieldData, 10);

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
   <Grid container >
       <Grid item sm >
           <Grid container >
                   <Grid item xs={12}>
                   <div style={{margin: '50px', minWidth: '675px', justifyContent:'center'}} >
                       <ControlPanel apiUrl={API_URL} onToggle={this.handleStartClick.bind(this)} userName={this.setUser}  />
                           {this.state.winner ? <span>{this.state.winner}</span>: null}
                     </div>
                   </Grid >

                   <Grid item xs={12} >
                     {true? (
                         <div style={{margin:'10px', minWidth: '675px', alignItems: 'center', justifyContent:'center', display:'flex'}}>
                             <Playfield onCkick={this.handleCellCkick.bind(this)}  data={this.state.playfieldData} />
                         </div>): null}
                   </Grid >
             </Grid>
       </Grid >

       <Grid item sm>
           <div style={{margin: '50px'}} >
               <WinnersList api={API_URL}  />
           </div>
       </Grid>
   </Grid>)
     }
}
