import React, {Fragment, useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import WinnerItem from './WinnerItem';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
export default props => {

  const [winners, setWinnersList] = useState([]);
  const API = props.api;
  useEffect(() => {
    setInterval(()=>{
      axios.get(`${API}/winners`)
    .then(res => {
      const winnersData = res.data;
      setWinnersList(winnersData);
    })}, 5000)
  }, []);

  return(<Fragment>
  <Typography align='center' variant="h2" >Leader Board</Typography>
  <List >
      {winners.map((winner) => (
        <Fragment key={winner.id}>
          <WinnerItem  winnerName={winner.winner} date={winner.date} />
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}

  </List>
  </Fragment>
  )
}
