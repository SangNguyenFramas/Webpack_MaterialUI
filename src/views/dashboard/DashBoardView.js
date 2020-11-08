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
  Fade,
  Slide,
} from "@material-ui/core";
import SCard from "../../components/SCard";
import Page from "../../components/Page";
import KhoNghienTho_Sausay from "../../components/KhoNghienTho_Sausay";
import KhoNghienTinh from "../../components/KhoNghienTinh";
import TagFile from "../../TagsFile.json";
import { readTagFile } from "../../utils/ReadTagFile";
import MaynghienTho1 from "../../components/MaynghienTho1";
import MaynghienTho2 from "../../components/MaynghienTho2";
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
        <Grid spacing={3} container>
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
    width: "100vw",
    // margin:'0 auto',
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 256px)",
    },

    // minHeight: '110vw',
    // height:'100vw'
    // paddingBottom: theme.spacing(3),
    // position:'relative'
    // paddingTop: '-64px',
    // flexGrow: 1,
    // display:'flex',
    // justifyContent:'center'
  },
  appbar: {
    top: "4rem",
    left: 256,
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      left: 0,
      top: "3rem",
      paddingTop: 0,
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height:'100%'
  },
  tabpanel: {
    position: "relative",
    top: "5rem",
    margin: "0 auto",
    // height:'110vh',
    [theme.breakpoints.down("md")]: {
      // position:'relative',
      left: 0,
      top: "3.5rem",
      // height:'110vh',
    },
    // margin:'0 auto',
    // display:'flex',
    // justifyContent:'center'
  },
  container: {
    height: "100%",
  },
  maynghienContainer: {
    margin: "0 auto",
    // left: 0,
    // padding: 10,
    [theme.breakpoints.down("md")]: {
      // position:'relative',
      margin: 0,
      marginTop: 0,
      padding: 0,
    },
  },
  maynghien: {
    display: "flex",
    justifyContent: "center",
    margin: 50,
    padding: 10,
    [theme.breakpoints.down("md")]: {
      // position:'relative',
      margin: 0,
      marginTop: 10,
    },
  },
}));

const NTho1_Tags = {
  Accept:"MayNghienTho1_Accept",
  PL_Auto:"MayNghienTho1_PL_Auto",
  PL_Auto:"MayNghienTho1_PL_Auto",
  PL_FW_MN:"MayNghienTho1_PL_FW_MN",
  PL_RV_MN:"MayNghienTho1_PL_RV_MN",
  PL_Btai:"MayNghienTho1_PL_Btai",
  PL_BTT:"MayNghienTho1_PL_BTT",
  PL_Qhut:"MayNghienTho1_PL_Qhut",
  PL_OVL_MN:"MayNghienTho1_PL_OVL_MN",
  PL_OVL_Btai:"MayNghienTho1_PL_OVL_Btai",
  PL_OVL_Qhut:"MayNghienTho1_PL_OVL_Qhut",
  PL_OVL_BTT:"MayNghienTho1_PL_OVL_BTT",
  Alarm_HT:"MayNghienTho1_Alarm_HT",
  Resuft_Hz_BT1:"MayNghienTho1_Resuft_Hz_BT1",
  Current_Digital_MN:"MayNghienTho1_Current_Digital_MN",
  Current_Digital_QH1:"MayNghienTho1_Current_Digital_QH1",
  BT_RST_MN:'MayNghienTho1_BT_RST_MN',
  BT_Start_Btai:'MayNghienTho1_BT_Start_Btai',
  BT_Start_FW_MN:'MayNghienTho1_BT_Start_FW_MN',
  BT_Start_Qhut:'MayNghienTho1_BT_Start_Qhut',
  BT_Start_RV_MN:'MayNghienTho1_BT_Start_RV_MN',
  BT_Stop_Btai:'MayNghienTho1_BT_Stop_Btai',
  BT_Stop_MN:'MayNghienTho1_BT_Stop_MN',
  BT_Stop_Qhut:'MayNghienTho1_BT_Stop_Qhut',
  In_Hz_BT:'MayNghienTho1_In_Hz_BT'




};
const NTho2_Tags = {
  Accept:"MayNghienTho2_Accept",
  PL_Auto:"MayNghienTho2_PL_Auto",
  PL_Auto:"MayNghienTho2_PL_Auto",
  PL_FW_MN:"MayNghienTho2_PL_FW_MN",
  PL_RV_MN:"MayNghienTho2_PL_RV_MN",
  PL_Btai:"MayNghienTho2_PL_Btai",
  PL_BTT:"MayNghienTho2_PL_BTT",
  PL_Qhut:"MayNghienTho2_PL_Qhut",
  PL_OVL_MN:"MayNghienTho2_PL_OVL_MN",
  PL_OVL_Btai:"MayNghienTho2_PL_OVL_Btai",
  PL_OVL_Qhut:"MayNghienTho2_PL_OVL_Qhut",
  PL_OVL_BTT:"MayNghienTho2_PL_OVL_BTT",
  Alarm_HT:"MayNghienTho2_Alarm_HT",
  Resuft_Hz_BT1:"MayNghienTho2_Resuft_Hz_BT1",
  Current_Digital_MN:"MayNghienTho2_Current_Digital_MN",
  Current_Digital_QH1:"MayNghienTho2_Current_Digital_QH1",
  BT_RST_MN:'MayNghienTho2_BT_RST_MN',
  BT_Start_Btai:'MayNghienTho2_BT_Start_Btai',
  BT_Start_FW_MN:'MayNghienTho2_BT_Start_FW_MN',
  BT_Start_Qhut:'MayNghienTho2_BT_Start_Qhut',
  BT_Start_RV_MN:'MayNghienTho2_BT_Start_RV_MN',
  BT_Stop_Btai:'MayNghienTho2_BT_Stop_Btai',
  BT_Stop_MN:'MayNghienTho2_BT_Stop_MN',
  BT_Stop_Qhut:'MayNghienTho2_BT_Stop_Qhut',
  In_Hz_BT:'MayNghienTho2_In_Hz_BT'
};



export default () => {
const classes = useStyles();
  const theme = useTheme();
const [value, setValue] = React.useState(0);
  const [tagsConstant, settagsConstant] = useState({})
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {
    (
      async ()=>{
        const tagFile = await readTagFile();
        //  console.log(tagFile);
       await settagsConstant(tagFile)
      }
    )();
  }, []);
  return (
    <>
      <Page className={classes.root} title="Dashboard">
        <AppBar color="default" className={classes.appbar}>
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

        <TabPanel value={value} index={0}>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Container maxWidth={false} fixed className={classes.container}>
              <Grid
                container
                //  spacing={3}
                justify="center"
                alignItems="center"
                // padding={0}
                className={classes.maynghienContainer}
              >
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                  className={classes.maynghien}
                >
                  <MaynghienTho1
                    title="Máy nghiền thô 1"
                    id_auto="NTho1__Auto"
                    id_man="NTho1__Manual"
                    tagListProp={NTho1_Tags}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                  className={classes.maynghien}
                >
                  <MaynghienTho1
                    title="Máy nghiền thô 2"
                    id_auto="NTho2__Auto"
                    id_man="NTho2__Manual"
                    tagListProp={NTho2_Tags}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                  className={classes.maynghien}
                >
                  {/* <MaynghienTho2
                    title="Máy nghiền tinh"
                    id_auto="NTinh__Auto"
                    id_man="NTinh__Manual"
                    tagList={tagsConstant}
                  /> */}
                </Grid>

                {/* <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid> */}
              </Grid>
            </Container>
          </Slide>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Container maxWidth={false} fixed className={classes.container}>
            <Grid
              container
              //  spacing={3}
              justify="center"
              alignItems="center"
              padding={0}
              className={classes.maynghienContainer}
            >
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <KhoNghienTho_Sausay title="Kho nghiền thô" />
              </Grid>
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <KhoNghienTho_Sausay />
              </Grid>
              {/* <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid> */}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container maxWidth={false} fixed className={classes.container}>
            <Grid
              container
              //  spacing={3}
              justify="center"
              alignItems="center"
              padding={0}
              className={classes.maynghienContainer}
            >
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <KhoNghienTinh />
              </Grid>
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <KhoNghienTinh />
              </Grid>
              {/* <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid> */}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Container maxWidth={false} fixed className={classes.container}>
            <Grid
              container
              //  spacing={3}
              justify="center"
              alignItems="center"
              padding={0}
              className={classes.maynghienContainer}
            >
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <MaynghienTho1 />
              </Grid>
              <Grid
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                className={classes.maynghien}
              >
                <MaynghienTho1 />
              </Grid>
              {/* <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Maynghien />
          </Grid> */}
            </Grid>
          </Container>
        </TabPanel>
      </Page>
    </>
  );
};
