import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import SCard from "./SCard";
import SSwitch from "./SSwitch";
const useStyles = makeStyles({
  root: {
      border:'2px solid white',
      borderRadius:12,
     

    minWidth: 275,
    background: "transparent",
    width: 200,
  },
  header: {
    background: "black",
    textTransform:'uppercase'
  },
  title: {
    fontSize: 14,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  contentItem: {
    margin: "100",
  },
});
const MayNghienControler = ({title,index}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={title} className={classes.header}>
          Toi la ai
        </CardHeader>
        <CardActions >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SSwitch tagname={`Control_NTho${index}`} Prefix="Local Station/Channel1/Device1" id="Local Station/Channel1/Device1"></SSwitch>
              <SSwitch tagname="OnOff" Prefix="Local Station/Channel1/Device1" id="Local Station/Channel1/Device1"></SSwitch>
            </Grid>
            <Grid item xs={12}>
              <SSwitch tagname={`Control_BTai${index}`} Prefix="Local Station/Channel1/Device1"></SSwitch>
            </Grid>
            <Grid item xs={12}>
              <SSwitch tagname={`Control_QHut${index}`} Prefix="Local Station/Channel1/Device1"></SSwitch>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default MayNghienControler;
