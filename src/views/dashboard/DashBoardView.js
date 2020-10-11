import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Page from '../../components/Page'
import { Card, CardHeader, Grid } from '@material-ui/core';
import SCard from '../../components/SCard';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
             
                    <Grid container>
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
const useStyle = makeStyles({
    page: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container:{
        display:'flex',
        alignContent:'center',
        marginTop:'50px',
        paddingTop:'0',
        marginLeft:'0'
    },
    appbar: {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        backgroundColor:'rgb(13 34 53)'
    }
})
function DashboardView() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyle();
    return (
        
            <Page
                title='Dashboard'
                className={classes.page}
            >
                <Grid
                    container
                    className={classes.container}
                >

                    <AppBar position="relative" className={classes.appbar}
                    >
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" 
                            
                             variant="scrollable">
                            <Tab label="Máy nghiền" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} variant='scrollable'>
                       
                            
                              <Grid item xs={12} sm={6} spacing={0} position='relative'>
                              <SCard Title='Máy nghiền'>

                                </SCard>
                              </Grid>
                              
                             
                              <Grid item xs={6}>
                              <SCard Title='Máy nghiền'>

                                </SCard>
                              </Grid>
                              <Grid item xs={6}>
                              <SCard Title='Máy nghiền'>

                                </SCard>
                              </Grid>
                        
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                </TabPanel>
                </Grid>
            </Page>
        
    )
}

export default DashboardView

