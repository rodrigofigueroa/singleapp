import { ARTIST } from '../Actions/Artista'

export const reducerSpoty = ( state, action ) => {    
    switch( action.type ){
        case ARTIST: 
        return{
            ...state, spoty: action
        }
        default:
            return state
    }
}