import React from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import Container from './Container'

const App = props => <Provider store={store}>
  <Container />
</Provider>

export default App
