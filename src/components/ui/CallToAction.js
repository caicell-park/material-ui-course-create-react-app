import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7em',
    padding: 5,
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: '1.5rem',
    marginRight: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Result.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? 'center' : undefined} item>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
