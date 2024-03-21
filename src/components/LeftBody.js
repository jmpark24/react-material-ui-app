import { Drafts, Home, Inbox, ShoppingCart } from '@mui/icons-material';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const LeftBody = () => {
  return (
    <Box flex={1} p={2} sx={{ xs: 'none', sm: 'block', backgroundColor: 'primary.main' }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Shopping" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default LeftBody;
