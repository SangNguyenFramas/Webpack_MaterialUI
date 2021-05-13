import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    type:'dark',
    primary:colors.common.blue,
    secondary: {
      light: '  #ff5722',
      main: '#d32f2f',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
  },
  shadows,
  typography
});

export default theme;
