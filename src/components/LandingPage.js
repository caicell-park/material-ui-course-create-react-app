import React from 'react';
import Lottie from 'react-lottie';
// import { makeStyles } from '@material-ui/core/styles';

import animiationData from '../animations/landinganimation/data';

// const useStyles = makeStyles((theme) => ({
//   mainContainer: {},
// }));

export default function LandingPage() {
  //   const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animiationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height="100%" width="100%" />;
}
