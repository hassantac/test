import React from 'react';
import { Box } from '@material-ui/core';
import { IPurchase } from '../../interfaces';
import PurchasesComponent from '../../components/Purchases';
import Navbar from '../../components/Navbar';
import Form from '../../components/Form';

const FormPage = (props: IPurchase) => {
  return (
    <>
      <Navbar content={Form} />
    </>
  );
};

export default FormPage;
