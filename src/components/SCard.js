import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles, CardHeader, CardMedia, TextField, Button, Switch, FormControlLabel, GridList
} from '@material-ui/core';
import MtOn  from "../assets/images/Motor_On.svg";

const useStyles = makeStyles((theme) => ({
    card_root:{
        minWidth:'200px',
        color:'white',
        backgroundColor:'#ccccc'
    },
    cardHeader_root:{
      color:'white',
      backgroundColor:'#333',
      textTransform:'uppercase'
    }
}));

const SCard = ({ Title, className, ...rest }) => {
  const classes = useStyles();
  const [status, setstatus] = useState(0)
  const [statusImg, setstatusImg] = useState("../assets/images/Motor_On.svg")
  const [checkedB, setCheckedB] = useState(true)
  const handleChange = (e, checked) => {
    if (checked === true)
      setCheckedB(true)
    else
      setCheckedB(false)
  }
  const handleSubmit = () => {
    switch (status) {
      case 0:
        setstatusImg("/assets/images/Motor_Off.svg")
        break;
      case 1:
        setstatusImg("/assets/images/Motor_On.svg")
        break;
      case 2:
        setstatusImg("/assets/images/Motor_Fault.svg")
        break;
      default:
        break;
    }
    if (status <= 2)
      setstatus(status + 1)
    else
      setstatus(0)
    // setCheckedB(!checkedB)
  }
  return (
    <>
      <Card
        className={clsx(classes.card_root, className)}
        {...rest}
      >
        <CardHeader
        classes={{
          root:classes.cardHeader_root,
          title:classes.cardHeader_title,
          action:classes.cardHeader_action,
          content:classes.carhHeader_content,

        }}
          title= {Title}
          action={
           
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={true}
                    onChange={handleChange}
                    name="checkedB"
                    color="secondary"
                  />
                }
                label={checkedB ? "Auto" : "Manual"}
              />
            
          }
         >
        </CardHeader>
        <CardContent>
          <CardMedia
          image={statusImg}
         />
        </CardContent>
        </Card>
      
    </>
  );
};

SCard.propTypes = {
  className: PropTypes.string
};

export default SCard;
