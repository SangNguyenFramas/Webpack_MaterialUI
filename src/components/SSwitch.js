import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MuiAlert from '@material-ui/lab/Alert';
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
  Snackbar,
} from "@material-ui/core";
import SCard from "./SCard";
import Page from "./Page";
import { yellow } from "@material-ui/core/colors";
import { values } from "lodash";
// import $ from window.jQuery;

const useStyles = makeStyles((theme) => ({
  switch_root: {
    transform: "scale(1.5,1.5)",
    marginRight: 10,
    // -moz-transform: 'scale(2,2)',
    // -webkit-transform: 'scale(2,2)',
    // -o-transform: 'scale(2,2)',
    // -ms-transform: 'scale(2,2)',
  },
  //   FormControlLabel:{

  //     display:'flex',
  //     justifyContent:'center',
  //     alignContent:'center',
  //     left:'50%'
  //   },

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
// const Prefix = "Local Station/Channel1/Device1/";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { tagname, id, Prefix } = props;
  // const [tags, setTags] = useState(window.tags)
  const [isChecked, setisChecked] = useState(false);
  const [notify, setNotify] = useState(
    {
        open:false,
        status:"ok",
        message:'Ghi thành công'
    }
  );
  const InitialTag = () => {
    console.log("aaaa");
    let tags = window.Subcribedtags;
    tags?.forEach((tag) => {
      if (tag.Name == tagname) {
        // alert(tag.Name)
        // console.log(tag.Value)
        let checked = tag.Value;
        setisChecked(checked == 1 ? true : false);
      } else return;
    });
  };

const callback =(status)=>{
  if(status == "ok")
  {
    setNotify(
      {  open:true,
        status:"success",
        message:'Ghi thành công'
      }
    )
  }
  else  
  {
    setNotify(
      {  open:true,
        status:"error",
        message:'Ghi thất bại'
      }
    )
  }
  //  InitialTag();
}

  // const [title1, settitle] = useState(title)
  const handleChange = (e, checked) => {
    console.log(e.target)
    window.writeTag(Prefix,tagname, checked ? "1" : "0", callback);
    setisChecked(e.target.checked);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotify(
      {
        open:false,
        status:"success",
        message:''
      }
    );
  };
  const ref = useRef(tagname);
  
  useEffect(() => {
   
    setTimeout(() => {
      // let tags = window.Subcribedtags;
      // tags?.forEach((tag) => {
      //   if (tag.Name == title) {
      //     // alert(tag.Name)
      //     // console.log(tag.Value)
      //     let checked = tag.Value;
      //     setisChecked(checked == 1 ? true : false);
      //   } else return;
      // });
      InitialTag();
    }, 2000);
  }, []);

  return (
    <>
      <FormControlLabel
        className={classes.FormControlLabel}
        label={tagname}
        control={
          <Switch
            checked={isChecked}
            onChange={handleChange}
            color="secondary"
            className={classes.switch_root}
            id={Prefix}
            value='off'
            name={tagname}
            inputProps={
             {
              'data-prefix':Prefix,
             }
            }
          />
        }
      />
      <Snackbar open={notify.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
        <Alert onClose={handleClose} severity={notify.status}>
         {notify.message}
        </Alert>
      </Snackbar>
      {/* <Button id = 'btnwrite' onClick={handleClick}>
         write
     </Button> */}
    </>
  );
};
