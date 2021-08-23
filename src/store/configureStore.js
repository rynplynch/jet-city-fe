import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import reducer from './reducer'
import logger from './middleware/logger'
import toast from './middleware/toast'
import api from './middleware/api'

export default function store() {
    return configureStore({
        reducer: reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({destination: 'console'}),
            api
        ]
    })
}