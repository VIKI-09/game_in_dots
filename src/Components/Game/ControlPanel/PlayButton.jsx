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
    <Button variant="contained" color="primary" className={classes.button}
    onClick={props.onClick}>
        Play
      </Button>)
}
