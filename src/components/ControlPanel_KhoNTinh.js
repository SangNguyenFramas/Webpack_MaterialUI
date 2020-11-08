import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import LoopIcon from "@material-ui/icons/Loop";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import {
  Container,
  Grid,
  Switch,
  makeStyles,
  Typography,
  FormControlLabel,
  Icon,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CardActions,
  Box,
  Input,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import Maynghien from "./MaynghienTho1";
import SwitchBase from "@material-ui/core/internal/SwitchBase";
import { Alert } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  dialogroot: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dialogTitle: {
    // display: "flex",
    // justifyContent: "flex-start",
    // flexDirection: "row",
    backgroundColor: "#01579b",
    // '&:firstChild':{
    //   display:'flex',
    //   justifyContent:'space-between',
    //   alignItems:'center'
    // }
    // width: "100%",
    // display: "block",
    // justifyContent: "space-between",
    // alignItems: "center",
    // flexDirection:'row'

    //  padding: "0 auto",
    // alignItems: "center",
    // position: "relative",
  },
  dialogContent: {
    minWidth: "100%",
    backgroundColor: "#424242",
    // maxWidth:500
    // height: "760px",
  },
  dialogAction: {
    backgroundColor: "transparence",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px",
    // backgroundColor:'black'
  },
  forwardIcon: {
    // color: "#2196f3",
    fontSize: "3rem",

    // boxShadow:'5px 7px 5px 0px rgba(18,11,18,1)'
  },
  card: {
    // backgroundColor: "#263238",
    backgroundColor: "#263238",
  },
  cardRoot: {
    backgroundColor: "black",
    height:'auto'
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // right: "0rem",
    // marginLeft: "0rem",
    paddingTop: 0,
    wrap:'nowrap'
  },
  cardTitle: {
    // backgroundColor:'black'
  },
  cardMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    wrap: "wrap",
  },
  iconButton: {
    backgroundColor: "#bbdefb",
    // '&:hover':{
    //   backgroundColor:'#333',
    //   color:'black'
    // },
    // '&:active':{
    //   backgroundColor:'#80deea'
    // },
    "&:disabled": {
      color: "white",
    },
  },
  aceptSwitch: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  gridItemCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    wrap:'nowrap',
    textAlign:'center'
  }
  // inputFreq:{
  //   display:'flex',
  //   justifyContent:'center',
  //   '&&:before':{
  //     textAlign:'center'
  //   }

  // }
}));
export default function ControlPanel_KhoNTinh(props) {
  const classes = useStyles();
  const { isOpen, handleClose, tagName } = props;
  const [isDisabled, setisDisabled] = useState(true);
  const [disableAcept, setdisableAcept] = useState(false);
  const [acept, setacept] = useState(false);
  const [isAllowReading, setisAllowReading] = useState(true);

  //   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const maxWidth = useMediaQuery(theme.breakpoints.down("sm"));
  const [notify, setnotify] = useState({
    open: false,
    message: "",
    status: "",
  }); //toast notify
  // const [message, setmessage] = useState("")

  // const handleOpenNotify = (newState) => {
  //   setnotify({
  //     open:true,
  //     message:
  //   });
  // };

  const handleCloseNotify = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setnotify({
      open: false,
      message: "",
      status: "",
    });
  };

  function callback(callbackValue) {
    // if (callbackValue.WriteCom) {
    // let value = callbackValue.WriteCommand.Value=='1'?true:false;

    if (callbackValue.IsSuccess) {
      setnotify({
        open: true,
        message: "Ghi thành công!",
        status: "success",
      });
    } else
      setnotify({
        open: true,
        message: "Ghi thất bại!",
        status: "error",
      });

    // setacept(value);
    // setisDisabled(!value);
    // setdisableAcept(false); //set cho switch Acept
    // setisAllowReading(true);

    // console.log(callbackValue);
    // return callbackValue;
  }
  const handleAceptChange = (e, checked) => {
    // console.log(e)
    setacept(checked);
    setisAllowReading(false);
    setdisableAcept(true);
    window.writeTag(tagName, checked ? 1 : 0, callback);
    setisDisabled(!checked);
    setdisableAcept(false); //set cho switch Acept
    setisAllowReading(true);
  };
  // useEffect(() => {
  //   // alert('re-render');
  //   const timer = setInterval(() => {
  //     // console.log(window.tags);
  //     var tag = window.tags && window.tags.find((tag) => tag.Name == tagName);
  //     //  console.log(tag)
  //     if (tag && isAllowReading) {
  //       setacept(tag.Value == "1" ? true : false);
  //     }
  //   }, 100);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={maxWidth}
        fullWidth={true}
        maxWidth="md"
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialogroot}
      >
        <DialogTitle
          id="responsive-dialog-title"
          className={classes.dialogTitle}
        >
          <Typography>CONTROL PANEL</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={acept}
                onChange={handleAceptChange}
                name="switchAccept"
                color="secondary"
                aria-checked={acept}
                arial-label={tagName}
                disabled={disableAcept}
                //  inputProps={{
                //    'arial-checked':acept.toString()
                //  }}
                //  value ={acept}
              />
            }
            label="Accept"
            className={classes.aceptSwitch}
          />
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Panel
              isDisabled={isDisabled}
              handleCloseNotify={handleCloseNotify}
              notify={notify}
            ></Panel>
          </Grid>
        </DialogContent>

        <DialogActions className={classes.dialogAction}>
          <Button
            autoFocus
            onClick={handleClose}
            color="secondary"
            variant="contained"
            // style={{ backgroundColor: "#fff" }}
          >
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
const Panel = (props) => {
  const { isDisabled, handleCloseNotify, notify } = props;
  const { open, message, status } = notify;
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12} md={12} className={classes.gridContainer}>
        <Card className={classes.card}>
          <CardHeader
            subheader={
              <>
               <FormControlLabel
                label="Tự động"
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="switchAuto"
                    color="secondary"
                    disabled={isDisabled}
                  />
                }
              />
               <FormControlLabel
                label="Bằng tay"
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="switchMan"
                    color="secondary"
                    disabled={isDisabled}
                  />
                }
              />
               <FormControlLabel
                label="Chế độ 3"
                control={
                  <Switch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="switchCD3"
                    color="secondary"
                    disabled={isDisabled}
                  />
                }
              />
              </>
             
            }
            title="Kho nghiền thô"
            classes={{
              root: classes.cardRoot,
              subheader: classes.cardAction,
              title: classes.cardTitle,
            }}
          />
          <CardContent>
            <CardMedia >
             
              <Grid container   
              spacing={1}
              justify="space-between"
              alignItems="center">
                  <Grid item xs={12} sm={12} className = {classes.gridItemCenter}>
                    <Typography variant="h5" color="default">VÍT TẢI CẤP LIỆU 1</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} className = {classes.gridItemCenter}>
                <FormControlLabel
                disabled={isDisabled}
                control={
                  <IconButton>
                    <LoopIcon
                      color="disabled"
                      className={classes.forwardIcon}
                    ></LoopIcon>
                  </IconButton>
                }
                label="Chạy nghịch"
                labelPlacement="bottom"
              ></FormControlLabel>
                </Grid>
                <Grid item xs={6} sm={6} className = {classes.gridItemCenter}>
                <FormControlLabel
                control={
                  <IconButton disabled={isDisabled}>
                    <AutorenewIcon
                      className={classes.forwardIcon}
                    ></AutorenewIcon>
                  </IconButton>
                }
                label="Chạy thuận"
                labelPlacement="bottom"
              ></FormControlLabel>
                </Grid>
                <Box m={1}></Box>
                  
            
              </Grid>
              
              
            </CardMedia>
          
          </CardContent>
          <CardContent>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              // alignContent="center"
            >
              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                XY LANH 1
              </Grid>
             
              <Grid
                item
                xs={6}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Lùi
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Tiến
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                XY LANH 2
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Lùi
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Tiến
                </Button>
              </Grid>
             
             
             
            </Grid>


            <Box mt={1}></Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              // alignContent="center"
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Bật Bơm dầu 
                </Button>
              </Grid>
              
            </Grid>
            <Box mt={1}></Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              // alignContent="center"
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  style={{
                    height: 50,
                    width: 400,
                  }}
                >
                  Bật Vít tải ra liệu
                </Button>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseNotify}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert onClose={handleCloseNotify} severity={status}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
ControlPanel_KhoNTinh.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
