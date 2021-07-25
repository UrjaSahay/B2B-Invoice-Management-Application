import React from 'react';
//import './App.css';
import theme from '../src/utils/theme';
import { makeStyles } from '@material-ui/core';
import CollectorDashboard from '../src/views/CollectorDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';
import Frontpage from './views/Frontpage.js';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  design: {
     top: "0px",
     left: "0px",
     width:"100vw",
     height:"100vh",
     //opacity: "1",
     background:"transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box"
     },
    }
));


/*
const useStyles = makeStyles((theme) => ({
  
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
   // overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));
*/
const App = () => {
  console.log('theme', theme);
  const classes = useStyles();
  return (
    <Paper className={classes.design}>
      <Frontpage/>
      </Paper>
    
  );
};

export default App;
