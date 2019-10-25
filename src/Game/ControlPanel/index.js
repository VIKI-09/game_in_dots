import React from 'react';
import PlayButton from './PlayButton';
import UserNameForm from './UserNameForm';
import DifficultyMenu from './DifficultyMenu';
import Paper from '@material-ui/core/Paper'
export default props =>
  <Paper>
    <UserNameForm />
    <DifficultyMenu />
    <PlayButton />
  </Paper>
