import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Typography, Box } from '@material-ui/core';
import OnOffButton from '../../components/Button';
import GreenBlueButton from '../../components/GreenBlueButton';
import BoxPage from '../BoxPage';
import Page1 from '../ButtonsPage';

const MainPage = (props: any) => {
  const [page, setPage] = useState(1);
  let content = page === 0 ? Page1 : page === 1 ? BoxPage : () => {};
  return (
    <>
      <Navbar content={content} setPage={setPage} />
    </>
  );
};

export default MainPage;
