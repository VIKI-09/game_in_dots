import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import ControlPanel from './ControlPanel';
import Playfield from './Playfield';
import WinnersTable from './WinnersTable';
import axios from 'axios';

const API_URL = 'http://starnavi-frontend-test-task.herokuapp.com';





function clickedCell(i){
  console.log('yeah!')
}


export default props =>{
  const [gameModePresets, setGameModePreset] = useState({})

  useEffect(() => {
    axios.get(`${API_URL}/game-settings`)
    .then(res => {
      const data = res.data;
      console.log(data)
      // setGameMode(data);
      // setLoading(false);
    })
  }, []);


  return (<Grid container>
      <Grid item sm>
        <Grid item xs={12}>
          <ControlPanel />
        </Grid >
        <Grid item xs={12}>
          <Playfield cellClick={clickedCell}/>
        </Grid >
      </Grid>
      <Grid item sm>
        <WinnersTable />
      </Grid>
    </Grid>)
}
