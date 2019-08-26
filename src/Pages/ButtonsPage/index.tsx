import React from 'react';
import { Box } from '@material-ui/core';
import OnOffButton from '../../components/Button';
import GreenBlueButton from '../../components/GreenBlueButton';

const Page1 = () => {
  return (
    <>
      <OnOffButton />
      <Box mt={1}>
        <GreenBlueButton />
      </Box>
    </>
  );
};
export default Page1;
