import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  // page:{
  //   // display:'flex',
  //   height:'100',
  //   color:'blue',
  //   // position:'relative',
  //   // top:'50%',
  //   // left:'50%',
  //   // transform:'translate(-50%,-50%)',
  //   margin:'0 auto',
  //   alignItems:'center',
  //   justifyContent:'center'
  // }
});
const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  const classes = useStyle();
  return (
    <div
      ref={ref}
      {...rest}
      // className={classes.page}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
)
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;

