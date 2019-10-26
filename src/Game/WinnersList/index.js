import React from 'react';
import List from '@material-ui/core/List';
import WinnerItem from './WinnerItem';
export default props => {
  return(
  <List>
      {props.winners.map((winner) => <WinnerItem key={winner.id} winnerName={winner.winner} date={winner.date} />  )}
  </List>
  )
}
