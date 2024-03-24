import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    password:""
}


export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    
    set: (state, action) => {
      state.password = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { set } = passwordSlice.actions

export const selectPassword = (state:any) => state.password.password;

export default passwordSlice.reducer