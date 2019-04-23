import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Post from './Post';
import SideBar from './SideBar';

function ProfilePanel({ classes }) {
  return (
    <Grid container justify="left" alignItems="top">
      <Grid item md={4}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className={classes.bigAvatar} />
      </Grid>
      <Grid item container md={8} className={classes.profileContent}>
        <div className={classes.name}>
          <Typography variant="h5" gutterBottom inline>
                user_name
          </Typography>
          <Button  variant="outlined"  size="small" className={classes.button}>
            Default
          </Button>
        </div>
        <Grid item sm={4}>
          100 post
        </Grid>
        <Grid item sm={4}>
          100 followers
        </Grid>
        <Grid item sm={4}>
          100 following
        </Grid>
        <Typography variant="body2" className={classes.profileDetail}>
          body2. Lorem ipsum dolor sit amet,

          consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum
           inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat d
          eleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
    </Grid>
  );
}

const styles= theme => ({
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
  },
  profileContent: {
    textAlign: 'left',
  },
  name: {
    display: 'block',
    width: '100%',
    marginBottom: theme.spacing.unit * 2,
  },
  profileDetail: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    wordWrap: 'break-word',
  }
});

export default withStyles(styles)(ProfilePanel);
