import React, { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import CryptoJS from "crypto-js";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles,
  Snackbar,
  
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  title:{
    display:'flex',
    justifyContent:'center',
    marginTop:'1em'
  },
  content:{
    backgroundColor:'rgba(12,12,12,0.5)'
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    let initialValues={
      'email': 'Amin@admin.io',
      'password': '11111'
    }
    var dataStored = CryptoJS.AES.encrypt(JSON.stringify(initialValues), 'matkhaulagiconlaumoinoi').toString();
    localStorage.setItem('userInfo',dataStored)
    return () => {
      
    }
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
        backgroundColor='green'
      >
        <Container maxWidth="sm" className={classes.content}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values,actions) => {
              setTimeout(() => {
                var dataStored = localStorage.getItem('userInfo')
                // console.log(dataStored)
                if(dataStored){
                
                  const bytes = CryptoJS.AES.decrypt(dataStored, 'matkhaulagiconlaumoinoi');
                 
                  const storedUserInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                 
                  if (storedUserInfo.email == values.email && storedUserInfo.password == values.password ) {
                      navigate('/app/dashboard', { replace: true });

                  }
                  else
                    setOpen(true);
                    actions.setSubmitting(true);
                }
              }, 3000);
            }}
            // handleChange={e=>{
            //     alert(e);
            // }}
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
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
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
                />
                <Box my={2} p={3}>
                  <Button
                    color="primary"
                     disabled={false}
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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} variant="filled" severity="error">
          Please check Email and Password!
        </MuiAlert>
      </Snackbar>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
