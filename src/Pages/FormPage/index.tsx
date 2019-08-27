import React from 'react';
import { IPurchase } from '../../interfaces';
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
