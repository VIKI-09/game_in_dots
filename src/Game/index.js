import React from 'react';
import Grid from '@material-ui/core/Grid';
import Playfield from './Playfield'
import WinnersTable from './WinnersTable'
const styles = {
  Paper:{
    paddng: 20,
    marginTop: 10
  }
}
function clickedCell(i){
  console.log('yeah!')
}


export default props =>
  <Grid container>
    <Grid item sm>
      <Playfield cellClick={clickedCell}/>
    </Grid>
    <Grid item sm>
      <WinnersTable />
    </Grid>
  </Grid>
