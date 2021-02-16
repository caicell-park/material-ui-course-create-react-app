import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
              <img alt="company logo" className={classes.logo} src={logo} />
              <Tabs>
                <Tab label="Home" />
                <Tab label="Services" />
                <Tab label="The Revoultion" />
                <Tab label="About Us" />
                <Tab label="Contact Us" />
              </Tabs>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>    
    );
}
