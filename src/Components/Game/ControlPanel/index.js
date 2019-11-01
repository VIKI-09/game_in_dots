import React from 'react';
import PlayButton from './PlayButton';
import UserNameForm from './UserNameForm';
import DifficultyMenu from './DifficultyMenu';
import FormGroup from '@material-ui/core/FormGroup';
export default props =>
      <FormGroup row>
        <UserNameForm setName={props.userName} />
        <DifficultyMenu isPlaying={props.status.isPlaying} api={props.apiUrl} gameModesData={props.gameModePresets} setMode={props.setGameMode}  />
        <PlayButton status={props.status} onClick={props.onToggle} />
     </FormGroup>
