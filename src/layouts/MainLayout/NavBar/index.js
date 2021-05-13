import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation,useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
 
  BarChart as BarChartIcon,
  
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import { relative } from 'path';

const user = {
  avatar: '',
  jobTitle: '',
  name: ''
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/reports',
    icon: UsersIcon,
    title: 'Reports'
  },
  
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    backgroundColor:'#333'
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
    position:'fixed',
    backgroundColor:'#333',
    color:'white'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  btnlogout:{
      boxShadow:'6px 6px 24px 5px rgba(0,0,0,0.75);',
      backgroundColor:'#fff',
      '&:hover':{
        backgroundColor:'#bdbdbd'
      },
      '&:active':{
        backgroundColor:'#fff9c4'
      },
      marginTop:'100px'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login', { replace: true });
  }
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          // component={RouterLink}
          src={user.avatar}
          // to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <Divider />
           <Hidden xlUp>
          <Button color='secondary' fullWidth className={classes.btnlogout} onClick={handleLogout}>
            Logout
          </Button>
          </Hidden>
        </List>
      </Box>
      <Box flexGrow={1}
       >
          
       </Box>
      {/* <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
      
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          
         
        </Box>
      </Box> */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
