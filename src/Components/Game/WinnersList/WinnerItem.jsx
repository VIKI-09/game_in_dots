import React from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default props => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          {props.winnerName === 'Computer' ? <ComputerIcon /> : <AccountCircleIcon /> }
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.winnerName} secondary={props.date} />
    </ListItem>
  )
}
