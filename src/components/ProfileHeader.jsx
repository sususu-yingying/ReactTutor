import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ProfileHeader(props) {
  const { classes } = props;
  return (
    <Grid container justify="left" alignItems="center">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
    </Grid>
  );
}

ProfileHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileHeader);
