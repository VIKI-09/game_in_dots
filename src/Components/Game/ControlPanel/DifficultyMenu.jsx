import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

const useStyles = makeStyles(theme => ({

  formControl: {
    margin: 15,
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default props => {


    const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
   props.setMode(event.target.value)
   };
   return(
     <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel required={true} ref={inputLabel}>
        Game Mode
      </InputLabel>
      <Select

        value={props.gameModesData}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
      {props.gameModesData.map((mode)=> {
        return(
          <MenuItem key={mode[0]}  value={mode[1]}>{mode[0]}</MenuItem>
        )
      })}
      </Select>
    </FormControl>
   )
}
//
