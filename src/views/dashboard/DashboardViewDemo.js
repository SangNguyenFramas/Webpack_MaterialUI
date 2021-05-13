import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Container,
  Paper,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import Page from "../../components/Page";
import { yellow } from "@material-ui/core/colors";
import SSwitch from "../../components/SSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'fixed',
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 256px)",
    },
    minHeight: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    // paddingBottom: theme.spacing(3),
    // position:'relative'
    // paddingTop: '-64px',
    // flexGrow: 1,
  },
  card: {
    minWidth: "100%",
    textAlign: "center",
    backgroundColor: "transparence",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border: ".5px solid black",
    boxShadow: "9px 10px 5px 0px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  switch_root: {
    transform: "scale(1.5,1.5)",
    marginRight: 10,
    // -moz-transform: 'scale(2,2)',
    // -webkit-transform: 'scale(2,2)',
    // -o-transform: 'scale(2,2)',
    // -ms-transform: 'scale(2,2)',
  },
  formCtr: {
    padding: 10,
    margin: 10,
  },
  cardroot: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 20,
  },
  cardheader_title: {
    fontSize: 30,
  },
  cardContent: {
    paddingTop: 30,
    textAlign: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 80,
    wordWrap: "wrap",
  },
  //   switch:{
  //
  //   }
  switchBase: {
    color: yellow[300],
    "&$checked": {
      color: yellow[500],
    },
    "&$checked + $track": {
      backgroundColor: yellow[500],
      width: "100px",
    },
  },
  checked: {},
}));

export default () => {
  
  const classes = useStyles();
  const theme = useTheme();
  // const [tags, settags] = useState(window.tags);
  const [isChecked, setisChecked] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // useEffect(() => {
  //   let timer = setInterval(async()=>{
  //     await getAllTagsAsync("Local Station/Channel1/Device1")
  //     let newTags = [...tags]

  //     // console.log(newTags)
  //     settags(window.tags);

  //       // console.log(a)
  //       // settags(window.tags)
  //   },1000)
  //   return ()=>( clearInterval(timer))
     
    
  // }, [])
  // const test = window.tags.map((tag,key)=>(
  //   <h1 key={tag.Id}>{tag.Name}</h1>
  // ))
  return (
    
    <Page className={classes.root} title="Dashboard">
      <Paper className={classes.paper}>
      
        <Card className={classes.card}>
     
          <CardHeader
            title="Control Panel"
            classes={{
              root: classes.cardroot,
              title: classes.cardheader_title,
            }}
          />
          
          <CardContent className={classes.cardContent}>
            <Grid container spacing={5} justify="space-between">
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
              
                <SSwitch title="Control_NTho1" id="Control_NTho1"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_NTho2" id="Control_NTho2"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_NTinh" id="Control_NTinh"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_EV1" id="Control_EV1"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_EV2" id="Control_EV2"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_BTai1" id="Control_BTai1"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_BTai2" id="Control_BTai2"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_BTai3" id='Control_BTai3'></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_FD_A11" id="Control_FD_A11"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_FD_A12" id="Control_FD_A12"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_FD_A21" id="Control_FD_A21"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_FD_A22" id="Control_FD_A22"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_QH1" id="Control_QH1"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_QH2" id="Control_QH2"></SSwitch>
              </Grid>
              <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.gridItem}
              >
                <SSwitch title="Control_QH3" id="Control_QH3"></SSwitch>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Page>
  );
};
