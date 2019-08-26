import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';

const BoxPage = () => {
  const [toggleVisibility, setToggleVisibility] = useState(1);
  return (
    <Box>
      <Box height={80}>
        {toggleVisibility === 1 && <Box p={4} bgcolor="green" width={80}></Box>}
      </Box>
      <Button
        onClick={e => setToggleVisibility(toggleVisibility === 1 ? 0 : 1)}
        color="primary"
        variant="contained"
      >
        {toggleVisibility === 1 ? 'Showing' : 'Disappeared'}
      </Button>
    </Box>
  );
};

export default BoxPage;
