import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const OnOffButton = () => {
  const [state, setState] = useState(0);
  function handleToggle() {
    setState(state === 0 ? 1 : 0);
  }
  return (
    <Button variant="contained" color="primary" onClick={e => handleToggle()}>
      {state === 0 ? 'On' : 'Off'}
    </Button>
  );
};
export default OnOffButton;
