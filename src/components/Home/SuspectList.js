import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: '360px',
      backgroundColor: theme.palette.background.paper,
      borderColor: 'gray'
    },
  }));

const SuspectList = () => {
    const classes = useStyles();

    
  return (
    <List component="nav" className={classes.root} aria-label="Mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
};

export default SuspectList;
