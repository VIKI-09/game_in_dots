import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import ControlPanel from './ControlPanel';
import Playfield from './Playfield';
import WinnersList from './WinnersList';
import axios from 'axios';

const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';







export default props =>{
  const [state, setState] = useState({
    field: 3,
    delay: 5000,
   isPlaying: false,
   winner:''
 });
  const [winners, setWinnersList] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/winners`)
    .then(res => {
      const winnersData = res.data;
      setWinnersList(winnersData);
    })
  }, []);
  function setUser(name){
    setUserName(name);
  }

  function handleClick(){
    let newState = state;
    console.log(newState);
    newState.isPlaying = !state.isPlaying;
    setState(newState)
    console.log(newState);
    console.log(state);
  }

  return (<Grid container>
      <Grid item sm>
      <div style={{margin: '50px 20px 50px 100px'}}>
        <Grid item xs={12}>

        <ControlPanel onToggle={handleClick} userName={setUser} gameModePresets={props.gameModePresets} />
        {state.winner ? <span>{state.winner}</span>: null}

        </Grid >
        <Grid item xs={12}  >
            <Playfield status={state.isPlaying} gameData={{field: 5, delay: 3000}} />
        </Grid >
        </div>
      </Grid>
      <Grid item sm>
      <div style={{margin: '50px'}} >
        <WinnersList style={{margin: '50px'}} winners={winners} />
      </div>
      </Grid>
    </Grid>)
}
