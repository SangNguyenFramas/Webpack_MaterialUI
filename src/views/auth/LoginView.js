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
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';
import Page from '../../components/Page';
import store2 from 'store2';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    magin: '10px 10px',
    padding: '0 20px'
  },
  container: {
    backgroundColor: '#333',
    // display:'flex',
    // direction:'column',
    // justifyContent:'center',
    // alignItems:'center',
    margin: '0 auto',
    padding: '30px'
  },
  cardheader: {
    color: 'white',
    backgroundColor: '#333',
    fontSize: '2e',
    textAlign: 'center',
    border: 'none',
    marginTop: '10px'
  },
  cardfield: {
    color: 'white',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },

  },
  focused_field: {
    color: 'white'
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [logged, setlogged] = useState(true);
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('Password123')
  useEffect(() => {
    if (logged) {
      // window.preventBack();
      window.preventBack();
    }

  }, [])
  // const handleSubmit = ()=>{

  //   // navigate('/app/dashboard');

  // }
  return (
    <Page
      className={classes.root}
      title="Login"
    >

      <Container maxWidth="xs" className={classes.container}>
        <Typography variant='h1' className={classes.cardheader}>
          Đăng nhập
          </Typography>
        <Formik
          initialValues={{
            username: 'admin',
            password: 'Password123'
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('User Name is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={() => {
            let auth = { 'username': username, 'password': password }
            localStorage.setItem('auth', JSON.stringify(auth))
            let data = localStorage.getItem('auth')
            console.log(JSON.parse(data))
            navigate('/app/dashboard');
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
              <form onSubmit={handleSubmit} style={{ margin: '0 auto' }}>

                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="User Name"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={username}
                  variant="standard"
                  InputProps={{
                    className: classes.cardfield
                  }}
                  className={classes.cardfield}
                  InputLabelProps={{
                    className: classes.focused_field
                  }}
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
                  value={password}
                  variant="standard"
                  InputProps={{
                    className: classes.cardfield
                  }}
                  className={classes.cardfield}
                  InputLabelProps={{
                    className: classes.focused_field
                  }}

                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Đăng nhập
                  </Button>
                </Box>

              </form>
            )}
        </Formik>
      </Container>



    </Page>
  );
};

export default LoginView;
