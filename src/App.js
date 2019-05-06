import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Nav from "./components/Nav";
import "./App.css";
import FeedPanel from './components/FeedPanel'
import LoginPanel from './components/LoginPanel';
import ProfilePanel from './components/ProfilePanel';
import SinglePostPanel from './components/SinglePostPanel';


function App({ classes}) {
  const isLoggedIn = true;
  const isUserProfile = true;
  return (
    <div className="App">
      <Nav />
      <div className={classes.layoutContainer}>
        <SinglePostPanel />
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
});

export default withStyles(styles)(App);
