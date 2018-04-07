import { combineReducers } from 'redux'

import testReducer from './testReducer'
import pros from './pros'
import cons from './cons'

const rootReducer = combineReducers({
  testReducer,
  pros,
  cons
})

export default rootReducer
