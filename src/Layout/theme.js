
import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Routes from '../Routes/Routes';



function DarkTheme(){
const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: 'dark',
      },
    }),
 
);

   return(
       <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Routes/>
    </ThemeProvider>
    </>
   );
}


export default DarkTheme;