import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent, CardHeader, Grid, Box ,Container} from '@material-ui/core';
import SCard from '../../components/SCard';
import Maynghien from '../../components/Maynghien';
import Page from '../../components/Page';


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
        < Grid spacing={3} container >
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
  
    // position: 'fixed',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 256px)',
    },
    minHeight: '100vh',
    // paddingBottom: theme.spacing(3),
    // position:'relative'
    // paddingTop: '-64px',
    // flexGrow: 1,
  },
  appbar:{
    top:'4rem',
    left:256,
    position:'fixed',
    [theme.breakpoints.down('md')]: {
      left: 0,
      top:'3rem',
      paddingTop:0
    },
    // height:'100%'
  },
  tabpanel: {
    position:'relative',
    top:'5rem',
    [theme.breakpoints.down('md')]: {
      // position:'relative',
      left: 0,
      top:'3.5rem',
     
    },
      height:'100vh',
    // display:'flex',
    // justifyContent:'space-between',
    // alignItems:'space-between'
  }
}));

export default () => {
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
    <div >
      <Page 
        className={classes.root}
        title="Dashboard"
      >
      <AppBar color='default' className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          // textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="full width tabs example"
        >
          <Tab label="Máy nghiền" />
          <Tab label="Kho nghiền thô - Sau sấy" />
          <Tab label="Kho nghiền tinh - Giũ bụi" />
          <Tab label="Máy ép" />
        </Tabs>
      </AppBar>
     
        <TabPanel value={value} index={0}  className={classes.tabpanel}>
        <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
          justify='space-around'
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid>
         
        </Grid>
      </Container>

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
      
      </Page>
      
    </div>
  );
}