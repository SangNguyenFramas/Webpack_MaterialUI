import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    // position:'fixed',
    // display: 'flex',
    height: '100%',
     overflow: 'auto',
    width: '100%',
    // margin:'0 auto'
  },
  wrapper: {
    // display: 'flex',
    // flex: '1 1 auto',
    // overflow: 'auto',
    // height:'110vh',
    // paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    // overflow: 'auto',
  },
  content: {
    flex: '1 1 auto',
    // height:'150%',
    [theme.breakpoints.down('sm')]: {
      marginTop:'45px',
    },
     
      // overflow: 'auto',
      display:'flex',
      justifyContent:'center'
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
