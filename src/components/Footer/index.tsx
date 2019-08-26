import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = (props: any) => {
  return (
    <div
      style={{
        marginTop: 210,
        padding: 24,
        backgroundColor: 'white',
        display: 'flex'
      }}
    >
      <Typography variant="h6">Footer</Typography>
      <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'right' }}>
        Copyrights@ xyz, 2019 INC.
      </Typography>
    </div>
  );
};
export default Footer;
