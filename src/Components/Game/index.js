import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ControlPanel from './ControlPanel';
import Playfield from './Playfield';
import WinnersList from './WinnersList';
import Typography from '@material-ui/core/Typography'

import axios from 'axios';

const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';


export default class Game extends Component  {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      gameModePresets: null,
      playfieldData: null,
      delay: null,
      gameMode:{},
      userName: null,
      winner: null,
      isPlaying: false,
      scoreCounter: {
        user: 0,
        computer: 0
      }
    }
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setGameMode = this.setGameMode.bind(this);




  }


  getDate (){
    let date = new Date();
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      };
   return date.toLocaleString("en-US", options)
  }

  setWinner(){
    axios.post(`${API_URL}/winners`, {winner:this.state.winner, date: this.getDate()})
     .then(res =>{
       console.log(res);
       console.log(res.data);
     })
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
  let updState = this.state;
  updState.isPlaying = true;
  this.setState(updState);
    setTimeout(() =>this.cellActivator(this.state.delay),this.state.delay)

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

    componentDidMount() {
    axios.get(`${API_URL}/game-settings`)
      .then(res => {
            const data = res.data;
            let modes = Object.entries(data);
            let updData = this.state;
            updData.gameModePresets = modes;
            this.setState(updData);
      })
  }

   render() {
     return (
   <Grid container >
       <Grid item sm >
           <Grid container >
                   <Grid item xs={12}>
                   <div style={{margin: '50px', minWidth: '675px', justifyContent:'center'}} >
                       {this.state.gameModePresets ? <ControlPanel apiUrl={API_URL} onToggle={this.handleStartClick} userName={this.setUser} gameModePresets={this.state.gameModePresets} setGameMode={this.setGameMode} /> : null}
                           {this.state.winner ? <Typography color='textSecondary' variant='h3' align='center'>{this.state.winner} win!</Typography   >: null}
                     </div>
                   </Grid >

                   <Grid item xs={12} >
                     {this.state.playfieldData ? (
                         <div style={{margin:'10px', minWidth: '675px', alignItems: 'center', justifyContent:'center', display:'flex'}}>
                             <Playfield onClick={this.handleCellClick}  data={this.state.playfieldData} />
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
