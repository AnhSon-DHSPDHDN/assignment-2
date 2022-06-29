import { combineReducers } from 'redux'
import { tasksReducer } from './tasksReducer'

export const appReducer = combineReducers({
  tasks: tasksReducer
})
