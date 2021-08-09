import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import configureStore from './store/configureStore'
import moment from 'moment'
import { loadClients, addClient, removeClient } from './store/clients'
import { addProject, removeProject, loadProjectsOfClient } from './store/projects'
import { StaticRouter } from 'react-router-dom'
import * as actions from './store/api'

//Our UI layer
ReactDOM.render(<App />, document.getElementById('root'))

// For testing the Redux Store directly
// const store = configureStore();


// store.subscribe(() => {
//     console.log("Store changed!");
// });


// store.dispatch(
//     actions.apiCallBegan({
//         url: "/client",
//         onSuccess: "clients/clientsReceived"
//     })
// )

// store.dispatch(loadProjectsOfClient('60e0d133b06fd70b9c8dfb35'))



// store.dispatch(loadClients())


// setTimeout(() => store.dispatch(removeClient({
//     _id: '60e36f3a8fde0e2a8c50a36a'
// })), 5000)


// setTimeout(() => store.dispatch(addProject({
//     name: 'Different', 
//     client_id: '60e0d133b06fd70b9c8dfb35',
//     startTime: moment().format('2021-07-03'),
//     endTime: moment().format('2021-07-03')
// })), 5000)

// setTimeout(() => store.dispatch(removeProject(0)),5000)