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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TagFile from '../../components/SignalRTag.json'

const useStyles = makeStyles((theme) => ({
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
    color: 'white'
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
      backgroundColor: '#ffcf33',
      color:'blue',
      fontWeight:'bold'
      
    },
    borderRadius:5,
    //   width:100,
    //  height:'40px'
  },
  status:{
    [theme.breakpoints.down("md")]: {
      // position:'relative',
      // margin: 0,
      marginBottom: 10,
      // padding:0
    },
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

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login', { replace: true });
  }
  const handleTagSelectChange = (e) => {
    setselectValue(e.target.value)
  }
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo === null) {
      navigate('/login', { replace: true });
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
        <Box flexGrow={1} >


          {/* <Select value={selectValue}
            onChange={handleTagSelectChange}>

            {
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
            }
          </Select> */}

        </Box>
        <div id='status' style={{position:'relative',right:10,backgroundColor:'green',padding:10}} className={classes.status}>
              
          </div>
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
          <ExitToAppIcon></ExitToAppIcon>
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
