import { combineReducers } from 'redux'
import { reducerSpoty } from './Reducer'
export const reducersCom = combineReducers({ spooty: reducerSpoty })