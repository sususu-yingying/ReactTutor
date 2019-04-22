import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventDemo from "./button-events/EventDemo";
import { simpleAction } from "./redux/actions/simpleAction";
import Nav from "./components/Nav";
import "./App.css";
import Post from './components/Post';
import SideBar from './components/SideBar';

function App({ classes}) {
  return (
    <div className="App">
      <Nav />
      <div className={classes.layoutContainer}>
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
      </div>
    </div>
  );
}

const styles = theme => ({
  layoutContainer: {
    paddingTop: 120,
    marginLeft: 132,
    marginRight: 132,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
    position: 'relative',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  sideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
});

export default withStyles(styles)(App);
