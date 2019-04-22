import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';
import SideBarCard from './SideBarCard';

function SideBar({ classes }) {
  return (
    <div className={classes.container}>
      <ProfileHeader />
      <SideBarCard />
      <SideBarCard />
    </div>
  )
}

const styles = theme => ({
  container: {
    maxWidth: 300,
    position: 'sticky',
    top: 60,
  }
});

export default withStyles(styles)(SideBar);
