import { createStore } from 'redux'
import { reducerSpoty } from '../Reducers/Reducer'

export const store = createStore(
    reducerSpoty, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)