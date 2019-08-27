import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import { Money, ListAlt } from '@material-ui/icons';
import withData from '../WithDataHOC/withData';
import { IDataHOCState } from '../../interfaces';

const DataList = (props: IDataHOCState) => {
  const { data } = props;
  debugger;
  return (
    <Paper elevation={11} style={{ padding: 36 }}>
      <List>
        <Typography variant="h4">List with HOC</Typography>
        {data &&
          data.map(item => (
            <ListItem button key={item.ID}>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary={item.Title} />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default withData(DataList);
