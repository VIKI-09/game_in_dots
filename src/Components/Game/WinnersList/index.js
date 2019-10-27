import React, {Fragment} from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import WinnerItem from './WinnerItem';
import Typography from '@material-ui/core/Typography'
export default props => {
  return(<Fragment>
  <Typography align='center' variant="h2" >Leader Board</Typography>
  <List >
      {props.winners.map((winner) => (
        <Fragment key={winner.id}>
          <WinnerItem  winnerName={winner.winner} date={winner.date} />
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}

  </List>
  </Fragment>
  )
}
