import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import { apiCallBegan } from './api';


const slice = createSlice({
    name: 'workstations',

    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },

    reducers: {
        //action handlers, events 
        workstationAdded: (workstations, action) => {
            workstations.list.push(action.payload[0]);
        },
        
        workstationsRequested: (workstations, action) => {
            workstations.loading = true;
        },

        workstationAddRequested: (workstations, action) => {
            workstations.loading = true;
        },

        workstationRemoveRequested: (workstation, action) => {
            workstation.loading = true;
        },

        workstationsReceived: (workstations, action) => {
            workstations.list = action.payload;
            workstations.loading = false;
            workstations.lastFetch = Date.now();
        },

        workstationsRequestFailed: (workstations, action) => {
            workstations.loading = false;
        },

        workstationRemoved: (workstations, action) => {
            const workstation_id = action.payload.id
            const index = workstations.list.findIndex(workstation => workstation.id === workstation_id);
            workstations.list.splice(index, 1);
        },
    
        workstationUpdated: (workstations, action) => {
            const workstation_id = action.payload.id
            const index = workstations.list.findIndex(workstation => workstation.id === workstation_id);
            workstations.list[index] = action.payload
        }
    }
})

const { 
    workstationsRequested,
    workstationsReceived,
    workstationsRequestFailed,
    workstationAdded, 
    workstationRemoved,
    workstationAddRequested ,
    workstationRemoveRequested,
    workstationUpdated
} = slice.actions
export default slice.reducer

//Endpoint of API should add to .env?
const workstationUrl = './workstation/'
const allWorkstationUrl = './project/workstation/'

//Actions Creators, the command
export const loadWorkstationsOfProject = project=> (dispatch, getState) => {
    dispatch(
        apiCallBegan({        
            url: allWorkstationUrl + project.id,
            onStart: workstationsRequested.type,
            onSuccess: workstationsReceived.type,
            onError: workstationsRequestFailed.type
        })
    )
}

export const addWorkstation = workstation => 
    apiCallBegan({
        url: workstationUrl,
        method: 'post',
        data: workstation,
        onStart: workstationAddRequested.type,
        onSuccess: workstationAdded.type
    })

export const updateWorkstation = workstation =>
    apiCallBegan({
        url: workstationUrl + workstation.id,
        method: 'put',
        data: workstation,
        onSuccess: workstationUpdated.type,
        onError: workstationsRequestFailed.type
    })

export const removeWorkstation = workstation =>
    apiCallBegan({
        url: workstationUrl + workstation.id,
        method: 'delete',
        onSuccess: workstationRemoved.type,
        onError: workstationsRequestFailed.type
    })