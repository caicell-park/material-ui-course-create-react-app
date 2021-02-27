import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

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
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}));

export default function Footer(props) {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              className={classes.link}
            >
              services
            </Grid>
            <Grid
              item
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={classes.link}
            >
              software development
            </Grid>
            <Grid
              item
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              className={classes.link}
            >
              mobile app development
            </Grid>
            <Grid
              item
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              className={classes.link}
            >
              website development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              revolution
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              vision
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              technology
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              className={classes.link}
            >
              process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              about us
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              history
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
              className={classes.link}
            >
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

Footer.propTypes = {
  setValue: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
