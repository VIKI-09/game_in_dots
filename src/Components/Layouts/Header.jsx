import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return(

     <AppBar position="static">
       <Toolbar variant="dense">
         <Typography variant="h1" color="inherit">
           Game In Dots
         </Typography>
       </Toolbar>
     </AppBar>

  )
}
