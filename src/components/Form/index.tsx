import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Paper
      elevation={11}
      style={{ display: 'flex', flexDirection: 'column', padding: 24 }}
    >
      <TextField
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ marginTop: 20 }}
      />
      <Button
        onClick={() =>
          console.log(`Username: ${username}, Password: ${password}`)
        }
        style={{ marginTop: 20 }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Paper>
  );
};

export default Form;
