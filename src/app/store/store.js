import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './input-slice'

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
})
