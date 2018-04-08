import React from 'react'

import { Provider } from 'unstated'

import Pros from './Containers/Pros'
import Cons from './Containers/Cons'

import View from './View'

const App = props => <Provider inject={[Pros, Cons]}>
  <View />
</Provider>

export default App
