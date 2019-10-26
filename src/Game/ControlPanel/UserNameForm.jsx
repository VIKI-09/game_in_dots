import React from 'react';
import TextField from '@material-ui/core/TextField';
// function handleChange(name){
//   console.log(name);
// }
export default props => {
  return(
    <form>
    <TextField
       id="outlined-with-placeholder"
       label="Enter Your Name"
       placeholder="Enter Your Name"
       // className={classes.textField}
       margin="dense"
       variant="outlined"

     />
     </form>
  )
}
