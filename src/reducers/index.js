import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'

const func = (state={},action) =>{
    if(action.type === 'FETCH_USER'){
        return {...state,user: action.payload}
    } else if(action.type === 'UPDATE_USER'){
        return {...state,user: action.payload}
    }
    return state
}

export default combineReducers({
    users: func,
    form: formReducer
})