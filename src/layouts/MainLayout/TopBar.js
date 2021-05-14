import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
  , Button, Select
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import TagFile from '../../components/SignalRTag.json'
import FullWidthTabs from '../../components/FullWidthTabs';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyItems: 'space-between',
    marginBottom: 0,

  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    width: 60,
    height: 60
  },
  title: {
    color: 'white',
    textTransform:'uppercase',
    textAlign:'center',
  
  },
  logout: {
    color: 'white',
    '&:hover': {
      color: 'white'
    },
  },
  btn_logout: {
    color: '#ffff',
    backgroundColor: '#b26500',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.3)'
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
  const [logged, setlogged] = useState(false)
  const [selectValue, setselectValue] = useState(null)
  const [isStarted, setisStarted] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login', { replace: true });
  }
  const handleTagSelectChange = (e) => {
    setselectValue(e.target.value)
  }
  useEffect(() => {
    if (window.isStarted) {
      setisStarted(true);
    }
    const userInfo = localStorage.getItem('isLogin');
    if (userInfo === null) {
      navigate('/login', { replace: true });
    }
  }, [])

  return (
    <>
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
          Nhà máy viên nén năng lượng Bảo Châu Phú Yên
           </Typography>
           <Box m={1}></Box>
          <div id='status'
             style={{
              background:isStarted?'green':'red',
              padding:4
            }}
          >
          <Typography
          >
             {isStarted?"Connected":"Disconnected"}
          </Typography>
          </div>
        {/* </RouterLink> */}
        <Box flexGrow={1} >


          {/* <Select value={selectValue}
            onChange={handleTagSelectChange}> */}

            {/* {
              TagFile.Stations[1].Channels.map(
                (channel, channelKey) => {
                  return(
                    channel.Devices.map(
                      (device,deviceKey)=>
                          {
                            return(
                              device.Tags.map(
                                (tag, tagKey) =>{
                                 return(
                                  <option key={tagKey} value={tag.Path}>{tag.Path}
                                  </option>
                                 )
                                }
                            )
                            )
                          }
                  )
                
                  )
                 })
            } */}
          {/* </Select> */}

        </Box>
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
    
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
