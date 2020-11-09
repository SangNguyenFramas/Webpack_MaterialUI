import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Snackbar
} from '@material-ui/core';
import Page from '../../components/Page';
import {UserApi} from '../../services/userApi'
import { assign } from 'lodash';
import { Alert } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  root: {
    //  backgroundColor: 'glue',
     height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color:'black'
  },
  title:{
    display:'flex',
    justifyContent:'center',
    marginTop:'1em',
    color:'white'
  },
  content:{
    backgroundColor:'#333',
    
  },
  textRoot: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0',
      },
      '&:hover fieldset': {
        borderColor: 'cyan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
}));

const LoginView = () => {
  
  const classes = useStyles();
  const navigate = useNavigate();
const [open, setopen] = useState(false)


const handleCloseNotify = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setopen(false)
};
  useEffect(() => {
    
   
  }, [])
  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.content}>
          <Formik
            initialValues={{
              userName: 'admin',
              password: 'admin'
            }}
            validationSchema={Yup.object().shape({
              userName: Yup.string().max(255).required('UserName is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
              let params = {
                userName:values.userName,
                password:values.password
              }
              try {
                const login = async()=>{
                   const res =await  UserApi.Login(params);
                   if (!res) {
                    setopen(true);
                    return res;
                   }
                   else 
                   {
                    localStorage.setItem('userInfo',JSON.stringify(res))
                    navigate('/app/dashboard', { replace: true });
                   }
                }
                const res =  login();
                console.log(res);
               
              
              } catch (err) {
                alert(err)
                setopen(true)
                console.log('Đăng nhập thất bại!',err);
              }
             
            }}
            handleChange={e=>{
                alert(e);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    className={classes.title}
>
                    Sign in
                  </Typography>
                 
                </Box>
               
                <Box
                  mt={3}
                  mb={1}
                >
                 
                </Box>
                <TextField
                  // error={Boolean(touched.userName && errors.userName)}
                  fullWidth
                  helperText={touched.userName && errors.userName}
                  label="User Name"
                  margin="normal"
                  name="userName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.userName}
                  variant="outlined"
                  // color='secondary'
                  className={classes.textRoot}
                />
                <TextField
                  //error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                  className={classes.textRoot}
                />
                <Box my={2} p={3}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in
                  </Button>
                </Box>
               
              </form>
            )}
          </Formik>
        
          <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseNotify} anchorOrigin={{horizontal:'center',vertical:'bottom'}}>
          <Alert severity='warning' onClose={handleCloseNotify} >
            Đăng nhập thất bại!
          </Alert>
        </Snackbar>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
