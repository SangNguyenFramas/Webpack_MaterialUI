import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  CardActionArea,
  Typography,
  Grid,
  CardMedia,
  Box,
  TextField,
  InputAdornment,
  Input,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import MtOn from "../assets/images/Motor_On.svg";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import { Label } from "@material-ui/icons";
import { green, lightGreen, orange } from "@material-ui/core/colors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LoopIcon from '@material-ui/icons/Loop';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import ControlPanel_KhoNTho_Sausay from "./ControlPanel_KhoNTho_Sausay";
import VTaiOn from "../assets/images/Vittai_On.svg";
import VTaiOff from "../assets/images/Vittai_Off.svg";
import BDauOn from "../assets/images/Pump_On.svg";
import BDauOff from "../assets/images/Pump_Off.svg";
import VTFull_Off from "../assets/images/Vittai_Full_Off.svg";
import VTFull_On from "../assets/images/Vittai_Full_On.svg";

const useStyles = makeStyles((theme)=>({
  card_root: {
    maxWidth: 500,
    // width:300
    width:'auto'
    // minWidth: 480,
  },
  cardheader_root: {
    backgroundColor: "#0277bd",
    textTransform: "uppercase",
  },

  card_img: {
    // marginBottom: 0,
    fontSize: "3rem",
    // width:70,
    color: "green",
  },
  card_actionArea: {
    margin: 0,
    padding: 0,
  },
  card_header: {
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "#123",
    // paddingTop:10,
    marginTop: 0,
  },

  btnTogle_selected: {
    backgroundColor: "orange !important",
    color: "#333 !important",
  },
  status_container: {
    marginTop: 10,
  },
  status_item__Active: {
    // border:'.5px solid #333',
    padding: 10,
    margin: 5,
    background: "#b28900",
  },
  status_item__InActive: {
    // border:'.5px solid #333',
    padding: 10,
    margin: 5,
    background: "transperance",
  },
  // statusMachine:{
  //   backgroundColor:'red',
  //     '&:selected':{
  //         backgroundColor:'black'
  //     }
  // }
  centerGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    wrap: "wrap",
    background:'blue'
  },
  xylanh_title:{
      width:'100%'
  },
  xylanh_icon_Back:{
      fontSize:'3.5rem',
      color:'lightGreen',
      [theme.breakpoints.down("sm")]:{
        marginLeft:0
      },
      marginLeft:10,
      

      
  },
  xylanh_icon_Forward:{
    fontSize:'3.5rem',
    color:'lightGreen',
    [theme.breakpoints.down("sm")]:{
      marginRight:0
    },
    marginRight:10
}
}));
function KhoNghienTho_Sausay(props) {
  const handleOpenCtrPanel = (e) => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const classes = useStyles();
  const { title, id_auto, id_man, id } = props;
  const [auto, setAuto] = useState(false);
  const [manual, setManual] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [view, setView] = React.useState(true);
  const [isReading, setisReading] = useState(true);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  const handleToggle_Auto = (e) => {
    // window.changeStatus(auto);
    setAuto(!auto);
  };
  const handleToggle_Manual = (e) => {
    // window.changeStatus(auto);

    setManual(!manual);
  };
  return (
    <>
      <Card
        classes={{
          root: classes.card_root,
        }}
      >
        <CardHeader
          title={title}
          action={
            <>
              <div className={classes.status_container}>
                <span
                  className={
                    auto
                      ? classes.status_item__Active
                      : classes.status_item__InActive
                  }
                  id={id_auto}
                  aria-value={auto}
                  aria-isReading={isReading}
                  onClick={() => setisReading(!isReading)}
                >
                  Auto
                </span>
                <span
                  className={classes.status_item__InActive}
                  id={id_man}
                  aria-value={manual}
                >
                  Manual
                </span>
              </div>
            </>
            // <ToggleButtonGroup orientation="horizontal" exclusive>
            //   <ToggleButton
            //     disableFocusRipple = {false}
            //     value={auto}
            //     selected={auto}
            //     aria-label="auto"
            //     onClick={handleToggle_Auto}
            //     classes={{
            //       selected: classes.btnTogle_selected,
            //     }}
            //     id={id_auto}
            //   >
            //     Auto
            //   </ToggleButton>
            //   <ToggleButton
            //    value={manual}
            //   selected={manual}
            //   aria-label="manual"
            //    onClick={handleToggle_Manual}
            //    classes={{
            //      selected: classes.btnTogle_selected,
            //    }}
            //    id={id_man}
            //   >
            //     Manual
            //   </ToggleButton>
            // </ToggleButtonGroup>
          }
          classes={{
            root: classes.cardheader_root,
            title: classes.card_title,
          }}
        ></CardHeader>
        <CardContent>
          <CardActionArea
            onClick={handleOpenCtrPanel}
            className={classes.card_actionArea}
          >
            <Grid container justify="center" alignItems="center" wrap="wrap">
              <Grid container justify="center" alignItems="center" wrap="wrap" style={{background:'#555'}}>
              <Grid item xs={6} style={{marginBottom:20,marginTop:10}}>
                <div style={{textAlign:'center'}}>
                    <Typography variant="h5" color="initial">XY LANH 1</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <ArrowBackIcon className={classes.xylanh_icon_Back}></ArrowBackIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Lùi
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <ArrowForwardIcon className={classes.xylanh_icon_Forward}></ArrowForwardIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Tiến
                        </Typography>
                    </div>
                </div>
              </Grid>
              <Grid item xs={6} style={{marginBottom:20,marginTop:10}}>
                <div style={{textAlign:'center'}}>
                    <Typography variant="h5" color="initial">XY LANH 2</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <ArrowBackIcon className={classes.xylanh_icon_Back}></ArrowBackIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Lùi
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <ArrowForwardIcon className={classes.xylanh_icon_Forward}></ArrowForwardIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Tiến
                        </Typography>
                    </div>
                </div>
              </Grid>
              <Grid item xs={6} style={{marginBottom:20}}>
                <div style={{textAlign:'center'}}>
                    <Typography variant="h5" color="initial">XY LANH 3</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <ArrowBackIcon className={classes.xylanh_icon_Back}></ArrowBackIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Lùi
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <ArrowForwardIcon className={classes.xylanh_icon_Forward}></ArrowForwardIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Tiến
                        </Typography>
                    </div>
                </div>
              </Grid>
              <Grid item xs={6} style={{marginBottom:20}}>
                <div style={{textAlign:'center'}}>
                    <Typography variant="h5" color="initial">XY LANH 4</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <ArrowBackIcon className={classes.xylanh_icon_Back}></ArrowBackIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Lùi
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <ArrowForwardIcon className={classes.xylanh_icon_Forward}></ArrowForwardIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Tiến
                        </Typography>
                    </div>
                </div>
              </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" wrap="wrap" style={{background:'#555',marginTop:10}}>
              <Grid item xs={6} style={{marginBottom:20,marginTop:10,wrap:'wrap'}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">VÍT TẢI CẤP LIỆU 1</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Nghịch
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <AutorenewIcon className={classes.xylanh_icon_Forward}></AutorenewIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Thuận
                        </Typography>
                    </div>
                </div>
              </Grid>
              <Grid item xs={6} style={{marginBottom:20,marginTop:10}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">VÍT TẢI CẤP LIỆU 2</Typography>
                </div>
                <div style={{textAlign:'center',float:'left'}}>
                    <div >
                        <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Nghịch
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right'}}>
                    <div >
                        <AutorenewIcon className={classes.xylanh_icon_Forward}></AutorenewIcon>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Thuận
                        </Typography>
                    </div>
                </div>
              </Grid>
              <Grid item xs={6} style={{marginBottom:20,marginTop:0}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">BÁO ĐẦY</Typography>
                </div>
                <div style={{textAlign:'center'}}>
                    
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}  
                           <img width={100} src={VTFull_On} alt="" />
                </div>
                
              </Grid>
              <Grid item xs={6} style={{marginBottom:20,marginTop:0}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">BÁO ĐẦY</Typography>
                </div>
                <div style={{textAlign:'center'}}>
                    
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon>
                         */}  
                          <img width={100} src={VTFull_On} alt="" />
                </div>
                
              </Grid>
             
              <Grid item xs={12} style={{marginBottom:20,marginTop:0}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">VÍT TẢI RA LIỆU</Typography>
                </div>
                <div style={{textAlign:'center',float:'left',marginLeft:'50px'}}>
                    <div >
                        <img src={VTaiOn} className={classes.xylanh_icon_Back}></img>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginLeft:0}}>
                            Trạng thái
                        </Typography>
                    </div>
                </div>
                <div style={{textAlign:'center',float:'right',marginRight:'50px'}}>
                    <div >
                        <img src={VTFull_On}  width={100} className={classes.xylanh_icon_Forward}></img>
                    </div>
                    <div >
                        <Typography variant="h5" color="initial" style={{marginRight:0}}>
                            Báo đầy
                        </Typography>
                    </div>
                </div>
              </Grid>
              </Grid>
              
              <Grid container justify="center" alignItems="center" wrap="wrap" style={{background:'#555',marginTop:10}}>
              <Grid item xs={6} style={{marginBottom:20}}>
                <div style={{textAlign:'center',marginBottom:10,marginTop:10}}>
                    <Typography variant="h5" color="initial">BƠM DẦU 1</Typography>
                </div>
                <div style={{textAlign:'center'}}>
                    <div >
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon> */}
                        <img src={BDauOn}></img>
                    </div>
                   
                </div>
                
              </Grid>
              <Grid item xs={6} style={{marginBottom:20}}>
                <div style={{textAlign:'center',marginBottom:10}}>
                    <Typography variant="h5" color="initial">BƠM DẦU 2</Typography>
                </div>
                <div style={{textAlign:'center'}}>
                    <div >
                        {/* <LoopIcon className={classes.xylanh_icon_Back}></LoopIcon> */}
                        <img src={BDauOn}></img>
                    </div>
                   
                </div>
                
              </Grid>
              </Grid>
              
              
              
              
            </Grid>
          </CardActionArea>
          <Box m={1}></Box>
         
          
          
        </CardContent>
      </Card>
      <ControlPanel_KhoNTho_Sausay
        isOpen={isOpen}
        handleClose={handleClose}
        id={id}
      ></ControlPanel_KhoNTho_Sausay>
    </>
  );
}

export default KhoNghienTho_Sausay;
