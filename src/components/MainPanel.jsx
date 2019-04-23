import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Post from './Post';
import SideBar from './SideBar';

function MainPanel({ classes }) {
  return (
    <Grid container spacing={32}>
      <Grid item sm={12} md={8}>
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
      <Grid item md={4} className={classes.sideBar}>
        <SideBar />
      </Grid>
    </Grid>
  );
}

const styles= theme => ({
  sideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
});

export default withStyles(styles)(MainPanel);
