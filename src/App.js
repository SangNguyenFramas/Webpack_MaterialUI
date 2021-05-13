import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import {  ThemeProvider } from '@material-ui/core';
import routes from './routes';
import theme from './theme'
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  // useEffect(() => {
  //   window.connect();
  //   // alert('app rerender')
  //   return () => {
  //     window.disconnect();
  //   }
  // }, [])
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
