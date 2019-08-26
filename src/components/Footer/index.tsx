import React from 'react';
import { Typography } from '@material-ui/core';
import { IFooterProps } from '../../interfaces';

class Footer extends React.Component<IFooterProps> {
  render() {
    const { leftText, rightText } = this.props;

    return (
      <div
        style={{
          marginTop: 210,
          padding: 24,
          backgroundColor: 'white',
          display: 'flex'
        }}
      >
        <Typography variant="h6">{leftText}</Typography>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'right' }}>
          {rightText}
        </Typography>
      </div>
    );
  }
}

export default Footer;
