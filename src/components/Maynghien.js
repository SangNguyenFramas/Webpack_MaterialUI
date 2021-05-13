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
import ControlPanel from "./ControlPanel";
const useStyles = makeStyles({
  card_root: {
     maxWidth:'500px'
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
});
function Maynghien(props) {
  const handleOpenCtrPanel = (e) => {
        setisOpen(true);
  };
  const handleClose = ()=>{
      setisOpen(false)
  }
  const classes = useStyles();
  const { title } = props;
  const [status, sEtstatus] = useState("Auto");
  const [isOpen, setisOpen] = useState(false)
  return (
    <div>
      <Card
        classes={{
          root: classes.card_root,
        }}
      >
        <CardHeader
          title={title}
          action={status}
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
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <img
                  src={MtOn}
                  width="50%"
                  height="auto"
                  className={classes.card_img}
                ></img>
                <Typography>Đ/cơ máy nghiền thô</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img src={MtOn} width="50%" height="auto"></img>
                </CardMedia>
                <Typography>Đ/cơ băng tải</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img src={MtOn} width="50%" height="auto"></img>
                </CardMedia>
                <Typography>Đ/cơ băng tải từ</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "center" }}>
                <CardMedia>
                  <img src={MtOn} width="50%" height="auto"></img>
                </CardMedia>
                <Typography>Đ/cơ quạt hút</Typography>
              </Grid>
            </Grid>
          </CardActionArea>
          <Box m={1}></Box>
          <Card >
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
                  <Typography>10A</Typography>
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
      <ControlPanel isOpen={isOpen} handleClose={handleClose}></ControlPanel>
    </div>
  );
}

export default Maynghien;
