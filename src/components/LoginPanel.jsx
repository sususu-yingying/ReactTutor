import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginCard from './LoginCard';

function LoginPanel({ classes }) {
  return (
    <Grid container spacing={32} className={classes.container}>
      <Grid item md={6} className={classes.media}>
        <img src="https://cdn.images.express.co.uk/img/dynamic/59/590x/Instagram-Best-Of-The-Year-898502.jpg" className={classes.image}/>
      </Grid>
      <Grid item sm={6}>
        <LoginCard />
      </Grid>
    </Grid>
  );
}

const styles= theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    maxWidth: '100%',
  }
});

export default withStyles(styles)(LoginPanel);
