import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profile from './profile'
import statistics from './statistics'
import components from './components'

export default combineReducers({
  routing: routerReducer,
  profile,
  statistics,
  components,
})
