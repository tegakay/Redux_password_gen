import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './passwordSlice'

export default configureStore({
  reducer: {
    password:passwordReducer
  }
})