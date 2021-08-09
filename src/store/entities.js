import {combineReducers} from 'redux'

//reducer imports
import clientsReducer from './clients'
import workstationsReducer from './workstations'
import projectsReducer from './projects'
import usersReducer from './users'

export default combineReducers({
    clients: clientsReducer,
    projects: projectsReducer,
    workstations: workstationsReducer,
    users: usersReducer
})