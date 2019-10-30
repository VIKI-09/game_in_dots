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
    field: 15,
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
  useEffect(()=>{    axios.get(`${API_URL}/game-settings`)
      .then(res => {
        const gameModePresets = res.data;
        // setLoading(false);
      })
    }, [])

  function handleClick(){
    let newState = state;
    console.log(newState);
    newState.isPlaying = !state.isPlaying;
    setState(newState)
    console.log(newState);
    console.log(state.isPlaying);
  }
// <Grid container direction="column" justify="center" alignItems="center">
  return (
<Grid container >
    <Grid item sm >
        <Grid container >
                <Grid item xs={12}>
                <div style={{margin: '50px', minWidth: '675px', justifyContent:'center'}} >
                    <ControlPanel onToggle={handleClick} userName={setUser} gameModePresets={props.gameModePresets} />
                        {state.winner ? <span>{state.winner}</span>: null}
                  </div>
                </Grid >

                <Grid item xs={12} >
                  {true? (
                      <div style={{margin:'10px', minWidth: '675px', alignItems: 'center', justifyContent:'center', display:'flex'}}>
                          <Playfield  gameData={{field: 10 , delay: 900}} />
                      </div>): null}
                </Grid >
          </Grid>
    </Grid >

    <Grid item sm>
        <div style={{margin: '50px'}} >
            <WinnersList  winners={winners} />
        </div>
    </Grid>
</Grid>)
}
