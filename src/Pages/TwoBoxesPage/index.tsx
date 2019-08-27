import React, { useState } from 'react';
import { Box, Paper, TextField } from '@material-ui/core';

const TwoBoxesPage = () => {
  const [toggleVisibility, setToggleVisibility] = useState('');
  let green = toggleVisibility === 'green' || toggleVisibility !== 'red';
  let red = toggleVisibility === 'red' || toggleVisibility !== 'green';
  return (
    <Paper
      elevation={11}
      style={{ padding: 36, display: 'flex', justifyContent: 'center' }}
    >
      <Box>
        <Box height={80} display="flex" mb={2}>
          <Box
            p={4}
            bgcolor="#20fd20"
            width={80}
            display={green ? 'block' : 'none'}
          ></Box>
          <Box
            p={4}
            bgcolor="tomato"
            width={80}
            ml={!green ? 0 : 2}
            display={red ? 'block' : 'none'}
          ></Box>
        </Box>
        <TextField
          value={toggleVisibility}
          label="Toggle box visibility"
          onChange={e => setToggleVisibility(e.target.value)}
        />
      </Box>
    </Paper>
  );
};

export default TwoBoxesPage;
