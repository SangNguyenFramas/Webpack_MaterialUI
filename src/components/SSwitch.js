import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent, CardHeader, Grid, Box ,Container, Paper, FormControlLabel, Switch, Button} from '@material-ui/core';
import SCard from './SCard';
import Page from './Page';
import { yellow } from '@material-ui/core/colors';
import { values } from 'lodash';
// import $ from window.jQuery;

const useStyles = makeStyles((theme) => ({
  
  switch_root:{
    transform: 'scale(1.5,1.5)',
    marginRight:10
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
      color: yellow[500]
    },
    "&$checked + $track": {
      backgroundColor: yellow[500],
      width:'100px'
    }
  },
  checked:{
    
  }
 
}));
const BasePath = "RemoteStation1/PLCNghien_EpVien/GiuBuiEpVien/";
export default (props)=>{
    const classes = useStyles();
    const theme = useTheme();
    const {title,id} = props;
    // const [tags, setTags] = useState(window.tags)
    const [isChecked, setisChecked] = useState(false)
    
    // const [title1, settitle] = useState(title)
    const handleChange=(e,checked)=>{
      //   alert(checked)
       window.writeTag(BasePath+title,checked?'1':'0' )
      setisChecked(e.target.checked)
       
    }
    const handleClick = ()=>{
    //    window.getTag(BasePath+title);
     console.log(tags);
    
    }
    const callback = (tags)=>{
        alert(tags)
    }
    const ref = useRef(title)
    useEffect(() => {
          setTimeout(()=>{
              let tags= window.tags;
              console.log(tags)
              tags?.forEach(tag => {
                if (tag.Name == title) {
                    let checked = tag.Properties.Value;
                    console.log(tag.Name+":"+checked)
                    setisChecked(checked==1?true:false)
                }
                else
                return;
             });
          },1000)
      }, []);
    
    return(
        <>
       <FormControlLabel className={classes.FormControlLabel}
  
       label={title}
       control={
         <Switch
            checked={isChecked}
            onChange={handleChange}
           color="secondary"
           className={classes.switch_root}
           id={id}
           value="off"
           name={title}
         />
       }
     />
     {/* <Button id = 'btnwrite' onClick={handleClick}>
         write
     </Button> */}
     </>
    )
    
  }