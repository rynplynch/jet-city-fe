import { combineReducers } from 'redux';

//reducer imports
import entitiesReducer from './entities'

export default combineReducers({
    entities: entitiesReducer
})