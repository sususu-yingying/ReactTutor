import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Nav from "./components/Nav";
import "./App.css";
import MainPanel from './components/MainPanel'
import LoginPanel from './components/LoginPanel';


function App({ classes}) {
  const isLoggedIn = false;
  return (
    <div className="App">
      <Nav />
      <div className={classes.layoutContainer}>
        {isLoggedIn && <MainPanel />}
        {!isLoggedIn && <LoginPanel />}
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
