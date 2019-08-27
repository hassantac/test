import React, { useState, useEffect } from 'react';
import { IDataHOCState, IDataStorageState } from '../../interfaces';
import { data } from '../WithDataHOC/data';

const DataStorage = (props: IDataHOCState) => {
  const [dataItems, setData] = useState<IDataStorageState[] | []>([]);
  useEffect(() => {
    setData(data);
  }, []);
  return dataItems;
};

export default DataStorage;
