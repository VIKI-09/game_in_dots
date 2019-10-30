import React from 'react';
import PlayButton from './PlayButton';
import UserNameForm from './UserNameForm';
import DifficultyMenu from './DifficultyMenu';
import FormGroup from '@material-ui/core/FormGroup';
export default props =>
  // <Paper>
      <FormGroup row>
        <UserNameForm setName={props.userName} />
        <DifficultyMenu api={props.apiUrl} modes={props.gameModePresets}  />
        <PlayButton  onClick={props.onToggle} />
     </FormGroup>
  // </Paper>
