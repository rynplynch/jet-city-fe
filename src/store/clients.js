import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api'
import moment from 'moment'

const slice = createSlice({
    name: 'clients',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },

    reducers: {
        //actions => action handlers
        clientsRequested: (clients, action) => {
            clients.loading = true;
        },

        clientsReceived: (clients, action) => {
            clients.list = action.payload;
            clients.loading = false;
            clients.lastFetch = Date.now();
        },

        clientsRequestFailed: (clients, action) => {
            clients.loading = false;
        },

        clientAdded: (clients, action) => {
            clients.list.push(action.payload[0]);
        },

        clientRemoved: (clients, action) => {
            const clientId = action.payload.id
            const index = clients.list.findIndex(client => client.id === clientId);
            clients.list.splice(index, 1);
        },

        clientUpdated: (clients, action) => {
            const clientId = action.payload[0].id
            const index = clients.list.findIndex(client => client.id === clientId);
            clients.list[index] = action.payload[0]
        }
    }
})

export const { 
    clientAdded, 
    clientRemoved,
    clientUpdated, 
    clientsReceived, 
    clientsRequested,
    clientsRequestFailed 
} = slice.actions

export default slice.reducer

//endpoint in api being hit, planning on adding this in config file
const url = './client/'

export const loadClients = () => (dispatch, getState) => {
    // An example of caching
    // const { lastFetch } = getState().entities.clients;

    // const diffInMinutes = moment().diff(moment(lastFetch), 'minute')
    // if (diffInMinutes < 10) return;
    dispatch(
        apiCallBegan({        
            url,
            onStart: clientsRequested.type,
            onSuccess: clientsReceived.type,
            onError: clientsRequestFailed.type
        })
    )
}

export const addClient = client =>
    apiCallBegan({
        url,
        method: 'post',
        data: client,
        onSuccess: clientAdded.type
    })

export const removeClient = client =>
    apiCallBegan({
        url: url + client.id,
        method: 'delete',
        data: client,
        onSuccess: clientRemoved.type,
        onError: clientsRequestFailed.type
    })

export const updateClient = client =>
    apiCallBegan({
        url: url + client.id,
        method: 'put',
        data: client,
        onSuccess: clientUpdated.type,
        onError: clientsRequestFailed.type
    })