import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import {  ThemeProvider } from '@material-ui/core';
import routes from './routes';
import theme from './theme'
import GlobalStyles from './components/GlobalStyles';
import {connect, disconnect} from './utils/SignalRClient';
import {tagsState} from './stateManager'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const App = () => {

  const callback =(tags)=>{
     setTags(tags) ;
    //  console.log(tags);
    //  console.log(tags);
  }
  useEffect(() => {
    // alert('rerender');
   connect();

  var timer= setInterval(() => {
    //  window.getAllTagsAsync(callback);
    // window.getAllChannelsAsync("RemoteStation1",callback);
    // window.getAllTagsAsync(callback);
    window.getAllElementsAsync(callback);

    // console.log(window.channels);
    
   }, 500);

    return () => {  
      clearInterval(timer)
      disconnect();
    }
  }, [])
  
  const [tags, setTags] = useRecoilState(tagsState);
  const routing = useRoutes(routes);
  return (
      <ThemeProvider theme={theme}>
      {/* <SignalRClient></SignalRClient> */}

      <GlobalStyles />
      {routing}
    </ThemeProvider>
    
  );
};

export default App;
