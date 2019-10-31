import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: 15

  }
}));

export default props => {
  const classes = useStyles();

  return(
    <Button disabled={!props.status.activator || props.status.isPlaying} variant="contained" color="primary" className={classes.button}
    onClick={props.onClick}>
        {props.status.label ? 'Play Again' :  'Play'}
      </Button>)
}
