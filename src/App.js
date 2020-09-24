import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Routes from './Routes/Routes';
import fire from './config/firebase';
import Theme from './Layout/theme';





 function App (){


return(

    <div >
      <Theme/>

    </div>
);
 }


export default App;
