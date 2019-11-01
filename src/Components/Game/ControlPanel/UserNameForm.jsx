import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
// function handleChange(name){
//   console.log(name);
// }
export default ({setName}) => {
  const [value, setValue] = useState('User')
    function submitHandler(event) {
      event.preventDefault();
      if(value.trim()){
        setName(value);
        setValue('');
      }

      }
  return(
    <form  onSubmit={submitHandler}>
    <TextField
       id="outlined-with-placeholder"
       label="Enter Your Name"
       placeholder="Enter Your Name"
       // className={classes.textField}
       margin="normal"
       variant="outlined"
       onChange={event => setValue(event.target.value) }
       value={value}

     />
     </form>
  )
}
