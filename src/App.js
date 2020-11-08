import React, { useCallback, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import { connect, disconnect } from "./utils/SignalRClient";
import { tagsState,tagsFileState } from "./stateManager";
import TagFile from './TagsFile.json'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { readTagFile } from "./utils/ReadTagFile";

const App = () => {
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagsFile, setTagsFile] = useRecoilState(tagsFileState);
  const callback = useCallback(async (tags) => {
    await setTags(tags);
  }, []);
  const getTagsAsync =useCallback(async ()=>{
    await  window.getAllElementsAsync(callback);
     // console.log('done')
 },[tags])
  useEffect(() => {
  //  alert('rerender')
    // const a = JSON.parse(TagFile);
  // console.log(TagFile);
    // alert('rerender');
   ( async ()=>{
    const tagList = readTagFile();
    await setTagsFile(tagList);
    // console.log(tagList);
  })()
    connect();
    // alert("render");
    
    var timer = setInterval(() => {
      
      //  window.getAllTagsAsync(callback);
      // window.getAllChannelsAsync("RemoteStation1",callback);
      // window.getAllTagsAsync(callback);
      getTagsAsync();
      // console.log(tagsFile);
      // console.log(tagsFile);
      // console.log(window.channels);
    }, 1000);

    return () => {
      clearInterval(timer);
      disconnect();
    };
  }, []);

  
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {/* <SignalRClient></SignalRClient> */}

      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default React.memo(App);
