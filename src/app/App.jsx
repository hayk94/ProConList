import React from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'

import Button from 'material-ui/Button'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

const App = props => <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Button variant='raised' color='primary'>Hello World</Button>
  </MuiThemeProvider>
</Provider>

export default App
