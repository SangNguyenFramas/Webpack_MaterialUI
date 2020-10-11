import React, { useState,useEffect } from 'react';
import { Link as RouterLink ,useNavigate} from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles, Typography
  ,Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(() => ({
  root: {
    display:'flex',
    justifyItems:'space-between',
    marginBottom:0,
   
  },
  toolbar:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  avatar: {
    width: 60,
    height: 60
  },
  title:{
    color:'white'
  },
  logout:{
    color:'white',
    '&:hover':{
      color:'white'
    },
  },
  btn_logout:{
    color:'#ffff',
    backgroundColor:'#b26500',
    '&:hover':{
      backgroundColor:'rgba(0,0,0,0.3)'
    },
    // width:'100px',
    // height:'40px'
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [notifications] = useState([]);
  const [logged, setlogged] = useState(true)
  const handleLogout = ()=>{
    navigate('/login', { replace: true });
  }
  useEffect(() => {
    if(logged) {
     
    }
   
  }, [])
  
  return (
    <AppBar position='fixed'
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        {/* <RouterLink to="/"> */}
          {/* <Logo />
           */}
           <Typography className={classes.title}>
              Giám sát nhà máy ....
           </Typography>
        {/* </RouterLink> */}
        {/* <Box flexGrow={1} /> */}
        <Hidden mdDown >
          {/* <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* <IconButton color="inherit" disabled>
            <InputIcon />
          </IconButton> */}
          <Button className={classes.btn_logout} onClick={handleLogout}>
            Log out
            {/* <RouterLink to='/login' className={classes.logout}>
                Logout
            </RouterLink> */}
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
