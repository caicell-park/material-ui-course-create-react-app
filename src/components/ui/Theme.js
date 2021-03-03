import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#0B72B9';
const orange = '#FFBA60';
const grey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${blue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: `${blue}`,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1.75em',
      color: `${blue}`,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: '1.25em',
      color: `${grey}`,
    },
    learnButton: {
      borderColor: `${blue}`,
      color: `${blue}`,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});
