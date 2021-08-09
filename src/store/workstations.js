import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'

let lastId = -1;

const slice = createSlice({
    name: 'workstations',
    initialState: [],
    reducers: {
        //actions => action handlers
        workstationAdded: (workstations, action) => {
            workstations.push({
                id: ++lastId,
                name: action.payload.name,
                flagged: false
            })
        },

        workstationRemoved: (workstations, action) => {
            workstations.splice(action.payload.id, 1)
        },

        workstationFlagged: (workstations, action) => {
            const index = workstations.findIndex(workstation => workstation.id === action.payload.id);
            workstations[index].flagged = true;
        }
    }
})

export const { workstationAdded, workstationRemoved, workstationFlagged } = slice.actions
export default slice.reducer

//Selector with Memoization
// f(x) => y { input: 1, output : 2 }
// workstations => get flagged workstations from the cache
export const getFlaggedWorkstations = createSelector(
    state => state.entities.workstations,
    workstations => workstations.filter(workstation => workstation.flagged)
)