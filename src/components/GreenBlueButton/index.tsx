import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const GreenBlueButton = () => {
  const [state, setState] = useState('green');

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ backgroundColor: state }}
      onMouseEnter={e => setState('blue')}
      onMouseLeave={e => setState('green')}
    >
      I'm {state}
    </Button>
  );
};
export default GreenBlueButton;
