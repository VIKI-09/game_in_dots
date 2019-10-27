import React from 'react';
import PlayButton from './PlayButton';
import UserNameForm from './UserNameForm';
import DifficultyMenu from './DifficultyMenu';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
export default props =>
  // <Paper>
      <FormGroup row>
        <UserNameForm setName={props.userName} />
        <DifficultyMenu modes={props.gameModePresets}  />
        <PlayButton />
     </FormGroup>
  // </Paper>
