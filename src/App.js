import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Blog from './Layout/HomePage/Main/Blog';
import SignUp from './Layout/HomePage/Main/SignUp';
import SignIn from './Layout/HomePage/Main/SignIn';

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div >
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <Router>
  <Route exact path="/" component={Blog} />       
  <Route exact path="/SignUp" component={SignUp} />    
  <Route exact path="/SignIn" component={SignIn} />     
 
    </Router>
    
    
    </ThemeProvider>
    </div>
  );

}

export default App;
