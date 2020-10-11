import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Card, CardActions, CardContent, CardHeader, Grid,Box} from '@material-ui/core';
import SCard from '../../components/SCard';
import { entries } from 'lodash';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      className={classes.tabpanel}
    >
      {value === index && (
        < Grid spacing={1} container  justify='flex-start'>
          {children}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



const useStyles = makeStyles((theme) => ({
  root: {
    
     
    // alignContent:'flex-end',
    // justifyContent:'flex-end',
    // justifyItems:'flex-end'
    // overflow: 'hidden',
    // position: 'fixed',
    //  bottom: 0,
    // marginTop:0,
    // paddingTop:0
    paddingTop:64,
    marginTop:-55,
    position:'fixed',
    width:'100%',
    [theme.breakpoints.up('lg')]:{
      width: 'calc(100% - 256px)',
    },
    flexGrow: 1,
  },
  tabpanel:{
    height:'100vh',
    margin:'10px',
    backgroundColor:'#444',
    position:'relative',
    display:'flex',
    alignContent:'space-between',
    color:'white'
    // padding:'10px'
  }
}));

export default ()=> {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="transparent" >
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="full width tabs example"
        >
          <Tab label="Máy nghiền"  />
          <Tab label="Kho nghiền thô - Sau sấy"  />
          <Tab label="Kho nghiền tinh - Giũ bụi"  />
          <Tab label="Máy ép"  />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        transitionDuration={
          {
            enter:5000,
            exit:4000
          }
          
        }
      >
        <TabPanel value={value} index={0}  >
          <Grid item xs={12} sm={4} lg={4} >
             <SCard Title='Máy nghiền tinh 1'>

             </SCard>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} >
             <SCard Title='Máy nghiền tinh 2'>

             </SCard>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} >
             <SCard Title='Máy nghiền thô 1'>

             </SCard>
          </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={1} >
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} >
          Item Four
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}