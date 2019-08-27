import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox, Mail } from '@material-ui/icons';
import { withRouter, Link } from 'react-router-dom';

const SidebarList = (props: any) => {
  const { match } = props;
  let url = match.url;
  return (
    <List>
      {[
        'Green/Blue Button',
        'Box appear/disappear',
        'Purchases',
        'Form',
        'Two Boxes',
        'THe HOC'
      ].map((text, index) => (
        <ListItem
          button
          key={text}
          component={Link}
          to={`/${index}`}
          selected={url === `/${index}`}
        >
          <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};
export default withRouter(SidebarList);
