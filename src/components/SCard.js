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
  root: {
    maxHeight: '100%',
    backgroundColor: '#111',
    minWidth:'200px',
    maxWidth:'500px'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  cardHeader: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '20px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%'
  },
  cardTitle: {
    fontSize: '20px',
    color: '#fff'
  },
  cardMedia: {
    height: '100px',
    // paddingTop: '56.25%', // 16:9
    // paddingTop: '15%', // 16:9
    // marginLeft: '20px',
    width: '200px',
    backgroundColor: '#3333',
    margin: '10px'
  },
  cardMediaContainer: {
    display: 'flex',
    justifyContent: 'flex-around'
  },
  cardMediaTitle: {
    display: 'flex',
    fontSize: '20px',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'0',

  },
  // cardContent:{
  //   backgroundColor: '#333',
  // },
  grid_parameter: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0',
    color: '#f7ecec',
    padding: '20px  '
  },
  parameter: {
    fontSize: '20px',
    color: '#f7ecec',
    paddingLeft: '20px'
  },
  grid_value: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: '#ffff',
    fontSize: '20px',
    paddingRight: '40px'
  },
  // value: {
  //   color: '#fff',
  //   '&:hover': {
  //     color: '#fff',
  //   },
  //   '&$focused': {
  //     backgroundColor: '#fff',
  //     boxShadow: `{fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
  //   },
  // },
  value: {
    display: 'flex',
    background: "black",
    fontSize: '18px',
    justifyItems: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'flex-end',

  },
  input: {
    display: 'flex',
    color: "white",
    fontSize: '18px',
    textAlign: 'center',
    '&::before': {
      textAlign: 'center'
    },
  }
}));

const SCard = ({ Title, className, ...rest }) => {
  const classes = useStyles();
  const [status, setstatus] = useState(0)
  const [statusImg, setstatusImg] = useState("/assets/images/Motor_On.svg")
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
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader
          title={<div className={classes.cardTitle}>
            {Title}
          </div>
          }
          action={
            <div>
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
            </div>
          }
          className={classes.cardHeader}>

        </CardHeader>
        <Grid container className={classes.cardMediaContainer}>
          <Grid item xs={6} className={classes.cardMediaTitle}>
            <Typography style={{fontSize:'16px'}}>
              Động cơ máy nghiền
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              className={classes.cardMedia}
              image={statusImg}
              
            >
            </CardMedia>
           
          </Grid>
          <Grid item xs={6} className={classes.cardMediaTitle}>
            <Typography style={{fontSize:'16px'}}>
              Động cơ băng tải
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              className={classes.cardMedia}
              image={statusImg}
            >
            </CardMedia>
          </Grid>
          <Grid item xs={6} className={classes.cardMediaTitle}>
            <Typography style={{fontSize:'16px'}}>
              Động cơ quạt hút
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              className={classes.cardMedia}
              image={statusImg}
            >
            </CardMedia>
          </Grid>
        </Grid>

        <CardContent className={classes.cardContent}>
          <Grid
            style={{ backgroundColor: '#333' }}
            container
            justify="space-between"
            spacing={1}
          >
            <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Dòng Motor
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                A
            </Typography>
            </Grid>
            <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Thời gian chạy máy
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                100 H
            </Typography>
            </Grid> <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Thời gian thay búa
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                10 H
            </Typography>
            </Grid> <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Năng suất
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                100 T
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader
          title={<div className={classes.cardTitle}>
            Cấp liệu
      </div>
          }
          className={classes.cardHeader}>

        </CardHeader>

        <CardContent>
          <Grid
            style={{ backgroundColor: '#333' }}
            container
            justify="space-between"
            spacing={1}
          >
            <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Dòng Motor
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                10 A
            </Typography>
            </Grid>
            <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Tần số
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                0 Hz
            </Typography>
            </Grid> <Grid item xs={8} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Nhập tần số
            </Typography>
            </Grid>
            <Grid item xs={4} className={classes.grid_value}>

              <TextField
                defaultValue="color"
                className={classes.value}
                InputProps={{
                  className: classes.input,
                  inputProps: { min: 0 }
                }}
                type='number'
                defaultValue={0}
              // label="Hz"
              // variant="stadard"
              />
              Hz

            </Grid>
            <Grid item xs={12} style={{ textAlign: 'end' }}>
              <Button variant="contained" color="primary" style={{ height: 'auto', width: '40px' }} onClick={handleSubmit}>
                OK
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader
          title={<div className={classes.cardTitle}>
            Quạt hút
      </div>
          }
          className={classes.cardHeader}>

        </CardHeader>

        <CardContent>
          <Grid
            style={{ backgroundColor: '#333' }}
            container
            justify="space-between"
            spacing={1}
          >
            <Grid item xs={6} className={classes.grid_parameter}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                Dòng Motor
            </Typography>
            </Grid>
            <Grid item xs={6} className={classes.grid_value}>
              <Typography
                color="primary"
                gutterBottom
                variant="h2"
                className={classes.parameter}
              >
                10 A
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

SCard.propTypes = {
  className: PropTypes.string
};

export default SCard;
