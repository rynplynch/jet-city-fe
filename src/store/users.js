import { createSlice } from '@reduxjs/toolkit';

let lastId = -1;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        //actions => action handlers
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name
            })
        },

        userRemoved: (users, action) => {
            users.splice(action.payload.id, 1)
        }
    }
})

export const { userAdded, userRemoved } = slice.actions
export default slice.reducer
