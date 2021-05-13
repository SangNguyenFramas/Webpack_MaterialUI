import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Snackbar
} from '@material-ui/core';
import Page from '../../components/Page';
import MuiAlert from '@material-ui/lab/Alert';
import CryptoJS from "crypto-js";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  form:{
    backgroundColor:'#1e1e1e',
    // margin:20,
    padding:60,
    display:'block',
    justifyContent:'center'
  }
}));

const ChangePasswordView = () => {
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
  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              oldpassword:'',
              password: '',
              confirmPassword:''
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                oldpassword:Yup.string().max(255).required('Required!'),
                password: Yup.string().max(255).required('Required!'),
                confirmPassword:Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
              })
            }
            onSubmit={(values) => {
              //get store
              var dataStored = localStorage.getItem('userInfo')
                // console.log(dataStored)
                if(dataStored){
                 
                  const bytes = CryptoJS.AES.decrypt(dataStored, 'matkhaulagiconlaumoinoi');
                  
                  const storedUserInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                  if (storedUserInfo.email == values.email && storedUserInfo.password == values.oldpassword ) {
                    var newdataStored = CryptoJS.AES.encrypt(JSON.stringify(values), 'matkhaulagiconlaumoinoi').toString();
                    localStorage.setItem('userInfo',newdataStored);
                    navigate('/login', { replace: true });
                  }
                  else
                    setOpen(true);
                     actions.setSubmitting(true);
                }
             
            }}
            onChange={e=>{
                console.log(e)
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
              <form onSubmit={handleSubmit} className={classes.form}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h3"
                    alignItems='center'
                    style={{textAlign:'center',marginTop:0}}
                  >
                    Change Password
                  </Typography>
                 
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
                  error={Boolean(touched.oldpassword && errors.oldpassword)}
                  fullWidth
                  helperText={touched.oldpassword && errors.oldpassword}
                  label="Old Password"
                  margin="normal"
                  name="oldpassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.oldpassword}
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
                
                  <TextField
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  fullWidth
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  label="Confirm Password"
                  margin="normal"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.confirmPassword}
                  variant="outlined"
                />
                  
                  
                
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Save change
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="overline"
                >
                  Go back
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h5"
                  >
                    Sign in
                  </Link>
                </Typography>
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

export default ChangePasswordView;
