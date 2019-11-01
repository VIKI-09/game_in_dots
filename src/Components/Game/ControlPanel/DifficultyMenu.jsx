import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'

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
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [values, setValue] = useState('')

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
   props.setMode(event.target.value)
   setValue(event.target.label)
   };
   return(
     <FormControl disabled={props.isPlaying} variant="outlined" className={classes.formControl}>
      <InputLabel id='select-mode' ref={inputLabel}>
        Game Mode
      </InputLabel>
      <Select
        labelid='select-mode'
        value={values}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
      {props.gameModesData.map((mode)=> {
        return(
          <MenuItem key={mode[0]} label={mode[0]}  value={mode[1]}>{mode[0]}</MenuItem>
        )
      })}
      </Select>
    </FormControl>
   )
}
//
