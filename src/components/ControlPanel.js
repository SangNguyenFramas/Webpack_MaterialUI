import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
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
} from "@material-ui/core";
import Maynghien from "./Maynghien";
import SwitchBase from "@material-ui/core/internal/SwitchBase";
const useStyles = makeStyles({
  dialogroot: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dialogTitle: {
    // display: "flex",
    // justifyContent: "flex-start",
    // flexDirection: "row",
    backgroundColor: "#01579b",

    // width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 auto",
    // alignItems: "center",
    // position: "relative",
  },
  dialogContent: {
    minWidth: "100%",
    backgroundColor: "#424242",
    height: "760px",
  },
  dialogAction: {
    backgroundColor: "transparence",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "1rem",
    marginLeft: "4rem",
    paddingTop: 0,
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
});
export default function ControlPanel(props) {
  const classes = useStyles();
  const { isOpen, handleClose } = props;
  const [isDisabled, setisDisabled] = useState(true);
  //   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const maxWidth = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(isOpen);
  };
  const handleChange = (e, checked) => {
    setisDisabled(!checked);
  };
  return (
    <>
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
                // checked={state.checkedB}
                onChange={handleChange}
                name="switchAccept"
                color="secondary"
              />
            }
            label="Accept"
          />
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="space-between"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Panel isDisabled={isDisabled}></Panel>
            <Panel isDisabled={isDisabled}></Panel>
            <Panel isDisabled={isDisabled}></Panel>
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
    </>
  );
}
const Panel = (props) => {
  const { isDisabled } = props;
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} md={4} className={classes.gridContainer}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <FormControlLabel
              label="Auto"
              control={
                <Switch
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  name="switchAuto_Man"
                  color="secondary"
                  disabled={isDisabled}
                />
              }
            />
          }
          title="MÁY NGHIỀN"
          classes={{
            root: classes.cardRoot,
            action: classes.cardAction,
            title: classes.cardTitle,
          }}
        />
        <CardContent>
          <CardMedia className={classes.cardMedia}>
            <FormControlLabel
              disabled={isDisabled}
              control={
                <IconButton>
                  <FastRewindIcon
                    color="disabled"
                    className={classes.forwardIcon}
                  ></FastRewindIcon>
                </IconButton>
              }
              label="Chạy nghịch"
              labelPlacement="bottom"
            ></FormControlLabel>
            <FormControlLabel
              control={
                <IconButton disabled={isDisabled}>
                  <FastForwardIcon
                    className={classes.forwardIcon}
                  ></FastForwardIcon>
                </IconButton>
              }
              label="Chạy thuận"
              labelPlacement="bottom"
            ></FormControlLabel>
          </CardMedia>
          <Box mt={2} mb={2}></Box>
          {/* <CardActions> */}

          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Input
                id="standard-adornment-weight"
                //   value={values.weight}
                //   onChange={handleChange("weight")}
                endAdornment={
                  <InputAdornment position="end">Hz</InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  min: 0,
                }}
                type="number"
                required={true}
                color="secondary"
                textAlign="center"
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
              disabled = {isDisabled}
                color="primary"
                variant="contained"
                onClick={() => alert("a")}
              >
                OK
              </Button>
            </Grid>
          </Grid>
          {/* </CardActions> */}
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
              sm={6}
              justify="center"
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
                  width:400
                }}
              >
                Bật quạt hút
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Button
                disabled={isDisabled}
                variant="contained"
                color="primary"
                style={{
                  height: 50,
                  width:400
                 
                }}
              >
                Tắt quạt hút
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
              justify="center"
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
                  width:400
                }}
              >
                Bật băng tải
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Button
                disabled={isDisabled}
                variant="contained"
                color="primary"
                style={{
                  height: 50,
                  width:400
                 
                }}
              >
                Tắt băng tải
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
              justify="center"
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
                  width:400
                }}
              >
                Tắt máy
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}
            style={{
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Button
                disabled={isDisabled}
                variant="contained"
                color="secondary"
                style={{
                  height: 50,
                  width:400
                }}
              >
                Reset Alarm
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
ControlPanel.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};
