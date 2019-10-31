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
      gameModePresets: null,
      playfieldData: null,
      delay: null,
      field: null,
      userName: 'User',
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




 checkWin(){
   if(this.state.scoreCounter.computer > this.getFiftyPer(this.state.field)){
     this.endGame('Computer')
   } else if(this.state.scoreCounter.user > this.getFiftyPer(this.state.field)){
     this.endGame(this.state.userName)
   }else return
 }



  getFiftyPer(field){
      let result = field * field / 2;
      return result
  }

  endGame(winner){
    console.log('-_____----____---END GAME-----_-__----____-');
    let updData = this.state
    updData.winner = winner;
    updData.isPlaying = false;
    this.setState(updData)
    this.setWinner();
  }

  reset(){
    let resetedState = this.state
    resetedState.winner = null
    resetedState.isPlaying = null
    resetedState.scoreCounter.user = 0
    resetedState.scoreCounter.computer = 0
    resetedState.playfieldData = this.initPlayfieldData(this.field);

    this.setState(resetedState)
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
  updData.field = gameModePreset.field
  this.setState(updData)
  }

  handleStartClick(){
    if(this.state.winner){
      this.reset()
    }
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

  handleCellClick(x, y) {
    let updatedData = this.state.playfieldData;
    updatedData[x][y].value = 'green';
    this.setState(
      {playfieldData: updatedData}
    )
     }

  cellActivator(delay){
     // setTimeout(()=> {
        if (!this.state.isPlaying){
          return;
        }
        let currentCell =  this.getRandomCell(this.state.playfieldData, this.state.field);

        console.log('------------INDEX OF CURRENT CELL-' + currentCell)
        let timerId = setTimeout(()=>{
          if(this.state.playfieldData[currentCell[0]][currentCell[1]].value === 'green'){
            console.log('проверка на GREEEN' );
            clearTimeout(timerId);
            console.log(timerId);
            let updData = this.state;
            updData.scoreCounter.user++
            this.setState(updData)

            // setTimeout (()=>this.cellActivator(delay),delay );

          }else{
            let updData = this.state;
            updData.playfieldData[currentCell[0]][currentCell[1]].value = 'red';
            updData.scoreCounter.computer++
            this.setState(updData)
            // setTimeout (()=>this.cellActivator(delay), delay);
          }
          this.checkWin();
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
            let updData = this.state.gameModePresets;
            updData = modes;
            this.setState({gameModePresets:updData});
      })
  }

   render() {
     return (
   <Grid container >
       <Grid item sm >
           <Grid container >
                   <Grid item xs={12}>
                   <div style={{margin: '50px', minWidth: '675px', justifyContent:'center'}} >
                       {this.state.gameModePresets ? <ControlPanel apiUrl={API_URL} onToggle={this.handleStartClick} userName={this.setUser} gameModePresets={this.state.gameModePresets} setGameMode={this.setGameMode} status={{label: this.state.winner, activator: this.state.playfieldData, isPlaying: this.state.isPlaying }} /> : null}
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
