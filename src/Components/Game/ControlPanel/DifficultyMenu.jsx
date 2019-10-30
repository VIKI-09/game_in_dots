import React, {useEffect} from 'react';
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

  useEffect(()=>{ axios.get(`${props.api}/game-settings`)
      .then(res => {
        const gameModePresets = res.data;
        // setLoading(false);
      })
    }, [])



  const [values, setValues] = React.useState({
     age: '',
     name: 'hai',
   });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
     setValues(oldValues => ({
       ...oldValues,
       [event.target.name]: event.target.value,
     }));
   };
   return(
     <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="Game Mode">
        Game Mode
      </InputLabel>
      <Select
        value={values}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
      <MenuItem value="hai">Hai</MenuItem>
        <MenuItem value="olivier">Olivier</MenuItem>
        <MenuItem value="kevin">Kevin</MenuItem>
      </Select>
    </FormControl>
   )
}
// {modes.map((mode)=> {
//   return(
//     <MenuItem value={mode}>{mode}</MenuItem>
//   )
// })}
