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
  Select,
} from "@material-ui/core";
import React, { useState,useEffect } from "react";
import MtOn from "../assets/images/Motor_On.svg";
import MtOff from "../assets/images/Motor_Off.svg";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import { Label } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";
import ControlPanel_MayNghien from "./ControlPanel_MayNghien";
import {useRecoilValue} from 'recoil';
import { tagsState } from "../stateManager";
import LoopIcon from "@material-ui/icons/Loop";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const useStyles = makeStyles({
  card_root: {
    maxWidth: 500,
    width:'auto',
     minWidth:350
    // minWidth:480
  },
  cardheader_root: {
    backgroundColor: "#0277bd",
    textTransform: "uppercase",
  },

  card_img: {
    marginBottom: 0,
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
  status_container:{
    marginTop:10
  },
  status_item__Active:{
    // border:'.5px solid #333',
    padding:10,
    margin:5,
    background:'#b28900'
  },
  status_item__InActive:{
    // border:'.5px solid #333',
    padding:10,
    margin:5,
    background:'transperance'
  }
  // statusMachine:{
  //   backgroundColor:'red',
  //     '&:selected':{
  //         backgroundColor:'black'
  //     }
  // }
});
function Maynghien(props) {
  const handleOpenCtrPanel = (e) => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const classes = useStyles();
  const { title,id_auto,id_man,tagName} = props;
  const [auto, setAuto] = useState(false);
  const [manual, setManual] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [view, setView] = React.useState(true);
  const [isReading, setisReading] = useState(true)
  const tags = useRecoilValue(tagsState);
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  const handleToggle_Auto = (e) => {
    // window.changeStatus(auto);
    setAuto(!auto);
  };
  const handleToggle_Manual = (e) => {
    // window.changeStatus(auto);
    setManual(!manual)
  };
  const getTagValue =(tagName)=>{
      
    
        const tag= tags.find(t=>t.Path == tagName);
        if (tag) 
        {
          // console.log(tagName);
          // console.log(tag.Value);
          // console.log(tag.Value);
          // console.log(tagName);
             console.log(tag.Properties.Value == '1');
          return  tag.Properties.Value == '1';
        
        }
        
      // //  console.log(tag&& tag.Value);
      //  
    
  }
  useEffect(() => {
    getTagValue(tagName)
   
  }, [tags])
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
          <span className={auto?classes.status_item__Active:classes.status_item__InActive} id={id_auto} onClick={()=>setisReading(!isReading)}>
              Auto
            </span>
            <span className={classes.status_item__InActive} id={id_man}>
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
           {/* {tags.map((tag)=>(tag.Name))} */}
            {/* <Typography variant="h1" color="initial">{tags}</Typography> */}
            <Grid container justify="center" alignItems="center" wrap="wrap">
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img
                  src={MtOn}
                  width="50%"
                  height="auto"
                  className={classes.card_img}
                  
                ></img>
               <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                 
               <LoopIcon style={{fontSize:'2.5rem',margin:0}}>Chạy thuận</LoopIcon>
                <AutorenewIcon style={{fontSize:'2.5rem',margin:0}}></AutorenewIcon>
               </div>
                <Typography>Đ/cơ máy nghiền thô</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img src={getTagValue(tagName)?MtOn:MtOff} width="50%" height="auto" aria-valuetext="Control_NTho1"></img>
                  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                 
               <LoopIcon style={{fontSize:'2.5rem',margin:0}}>Chạy thuận</LoopIcon>
                <AutorenewIcon style={{fontSize:'2.5rem',margin:0}}></AutorenewIcon>
               </div>
                </CardMedia>
                <Typography>Đ/cơ băng tải</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia
                
                >
                  <img src={getTagValue(tagName)?MtOn:MtOff} width="50%" height="auto"></img>
                  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                 
               <LoopIcon style={{fontSize:'2.5rem',margin:0}}>Chạy thuận</LoopIcon>
                <AutorenewIcon style={{fontSize:'2.5rem',margin:0}}></AutorenewIcon>
               </div>
                </CardMedia>
                <Typography>Đ/cơ băng tải từ</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img src={getTagValue(tagName)?MtOn:MtOff} width="50%" height="auto"></img>
                  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                 
               <LoopIcon style={{fontSize:'2.5rem',margin:0}}>Chạy thuận</LoopIcon>
                <AutorenewIcon style={{fontSize:'2.5rem',margin:0}}></AutorenewIcon>
               </div>
                </CardMedia>
                <Typography>Đ/cơ quạt hút</Typography>
              </Grid>
            </Grid>
          </CardActionArea>
          <Box m={1}></Box>
          <Card>
            <CardHeader
              title="Máy nghiền"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Dòng motor</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>10A</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Cấp liệu"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid
                container
                justify="center"
                alignItems="center"
                wrap="wrap"
                spacing={1}
              >
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Tần số</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>10Hz</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Quạt hút"
              className={classes.card_header}
            ></CardHeader>
            <CardContent>
              <Grid container justify="center" alignItems="center" wrap="wrap">
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>Dòng motor</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <Typography>10A</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <ControlPanel_MayNghien isOpen={isOpen} handleClose={handleClose} tagName={tagName}></ControlPanel_MayNghien>
    </>
  );
}

export default Maynghien;
