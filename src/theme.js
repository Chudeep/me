import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'TitilliumWeb',
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#FF3C5A',
    },
    secondary: {
      main: '#18315A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    textGray: {
      dark: '#BCC6D0',
      main: '#8FA3C4',
    },
  },
});

export default theme;
