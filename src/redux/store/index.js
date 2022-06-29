import { createStore } from 'redux'
import { appReducer } from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = process.env.NODE_ENV === 'production'
  ? createStore(appReducer)
  : createStore(appReducer, composeWithDevTools())

export default store