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
   currentGameMode: { field: 15, delay: 1000},
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




  return (<Grid container>
      <Grid item sm>
        <Grid item xs={12}>
        <ControlPanel userName={setUser} gameModePresets={props.gameModePresets} />
        {state.winner ? <span>{state.winner}</span>: null}

        </Grid >
        <Grid item xs={12}  >
          <Playfield />
        </Grid >
      </Grid>
      <Grid item sm>
        <WinnersList winners={winners} />
      </Grid>
    </Grid>)
}
