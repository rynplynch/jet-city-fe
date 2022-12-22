import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import { apiCallBegan } from './api';


const slice = createSlice({
    name: 'projects',

    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },

    reducers: {
        //action handlers, events 
        projectAdded: (projects, action) => {
            projects.list.push(action.payload);
        },
        
        projectsRequested: (projects, action) => {
            projects.loading = true;
        },

        projectAddRequested: (projects, action) => {
            projects.loading = true;
        },

        projectRemoveRequested: (projects, action) => {
            projects.loading = true;
        },

        projectsReceived: (projects, action) => {
            projects.list = action.payload;
            projects.loading = false;
            projects.lastFetch = Date.now();
        },

        projectsRequestFailed: (projects, action) => {
            projects.loading = false;
        },

        projectRemoved: (projects, action) => {
            const project_id = action.payload.id
            const index = projects.list.findIndex(project => project.id === project_id);
            projects.list.splice(index, 1);
        },
    
        projectUpdated: (projects, action) => {
            const project_id = action.payload[0].id
            const index = projects.list.findIndex(project => project.id === project_id);
            projects.list[index] = action.payload[0]
        }
    }
})

const { 
    projectsRequested,
    projectsReceived,
    projectsRequestFailed,
    projectAdded, 
    projectRemoved,
    projectAddRequested ,
    projectRemoveRequested,
    projectUpdated
} = slice.actions
export default slice.reducer

//Endpoint of API should add to .env?
const projectUrl = './project/'
const allProjectUrl = './client/project/'

//Actions Creators, the command
export const loadProjectsOfClient = client=> (dispatch, getState) => {
    dispatch(
        apiCallBegan({        
            url: allProjectUrl + client.id,
            onStart: projectsRequested.type,
            onSuccess: projectsReceived.type,
            onError: projectsRequestFailed.type
        })
    )
}

export const addProject = project => 
    apiCallBegan({
        url: projectUrl,
        method: 'post',
        data: project,
        onStart: projectAddRequested.type,
        onSuccess: projectAdded.type
    })

export const updateProject = project =>
    apiCallBegan({
        url: projectUrl + project.id,
        method: 'put',
        data: project,
        onSuccess: projectUpdated.type,
        onError: projectsRequestFailed.type
    })

export const removeProject = project =>
    apiCallBegan({
        url: projectUrl + project.id,
        method: 'delete',
        onSuccess: projectRemoved.type,
        onError: projectsRequestFailed.type
    })
