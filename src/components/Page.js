import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(



);
const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  return (
    <div
    id='page'
      ref={ref}
      {...rest}
      style={{height:'100vh',backgroundColor:'#7499bc',margin:'0 auto',position:'fixed',width:'100% '}}
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

