import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'boid',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              services
            </Grid>
            <Grid item className={classes.link}>
              software development
            </Grid>
            <Grid item className={classes.link}>
              mobile app development
            </Grid>
            <Grid item className={classes.link}>
              website development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              revolution
            </Grid>
            <Grid item className={classes.link}>
              vision
            </Grid>
            <Grid item className={classes.link}>
              technology
            </Grid>
            <Grid item className={classes.link}>
              process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              about us
            </Grid>
            <Grid item className={classes.link}>
              history
            </Grid>
            <Grid item className={classes.link}>
              team
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
