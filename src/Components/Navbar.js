import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
import dsclogo from '../assests/dsc.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="mainnav">
          <img className="logo" src = {dsclogo}/>
          <Typography variant="h6" className={classes.title}>
            <div className = "title">DSC <b>JIIT128</b></div>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            
            {/* <Link to="/search"><SearchTwoToneIcon fontSize="large"/></Link> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
