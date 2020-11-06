import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#858585',
    // backgroundImage: 'linear-gradient(167deg, #0093E9 0%, #2f776f 100%)',
   
    background: 'linear-gradient(to right, #616161, #9bc5c3)',

    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    display:'flex',
    justifyContent:'center'
  }
}));

const LoginLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
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

export default LoginLayout;
