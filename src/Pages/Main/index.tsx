import React from 'react';
import Navbar from '../../components/Navbar';
import BoxPage from '../BoxPage';
import Page1 from '../ButtonsPage';

const MainPage = (props: any) => {
  return (
    <>
      <Navbar content={Page1} />
    </>
  );
};

export default MainPage;
