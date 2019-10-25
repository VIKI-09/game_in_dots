import React from 'react';
import TextField from '@material-ui/core/TextField';
function handleChange(name){
  console.log(name);
}
export default props => {
  return(
    <form>
     <TextField
       id="standard-name"
       label="Name"
       // className={classes.textField}
       // value={values.name}
       onChange={handleChange('name')}
       margin="normal"
       placeholder="Player"
     />
     </form>
  )
}
