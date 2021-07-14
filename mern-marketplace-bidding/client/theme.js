import { createMuiTheme } from '@material-ui/core/styles'
import { red, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#FFB3B9',
      main: '#B1EDE8',
      dark: '#352D39',
      contrastText: '#352D39',
    },
    secondary: {
      light: '#FFFCF9',
      main: '#FF6978',
      dark: '#6D435A',
      contrastText: '#352D39',
    },
      openTitle: red['400'],
      protectedTitle: red['800'],
      type: 'light'
    }
  })

  export default theme