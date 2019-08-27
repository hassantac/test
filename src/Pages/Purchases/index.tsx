import React from 'react';
import { IPurchase } from '../../interfaces';
import PurchasesComponent from '../../components/Purchases';
import Navbar from '../../components/Navbar';
let purchases = [
  'Purchase 1',
  'Purchase 2',
  'Purchase 3',
  'Purchase 4',
  'Purchase 5'
];
const Purchases = (props: IPurchase) => {
  return (
    <>
      <Navbar content={() => <PurchasesComponent purchases={purchases} />} />
    </>
  );
};

export default Purchases;
