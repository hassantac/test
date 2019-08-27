import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@material-ui/core';
import { Money } from '@material-ui/icons';

const Purchases = (props: any) => {
  const { purchases } = props;
  return (
    <Paper elevation={11}>
      <List>
        {purchases &&
          purchases.map((item: any) => (
            <ListItem button key={item}>
              <ListItemIcon>
                <Money />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default Purchases;
