import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'fixed',
    backgroundColor: theme.palette.background.dark,
    // display: 'flex',
     height: '100vh',
    // overflow: 'auto',
    width: '100%',
    // top:64
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    // overflow: 'auto',
    height:'100vh',
    // paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    
  },
  content: {
    flex: '1 1 auto',
    height:'100vh',
      marginTop:'55px',
      overflow: 'auto',
      display:'flex',
      justifyContent:'center',
      backgroundColor:'#424242',
     
  }
}));

const MainLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
 
  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
