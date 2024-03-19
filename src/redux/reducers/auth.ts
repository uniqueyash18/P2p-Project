import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  userData: Object
}

const initialState: AuthState = {
    userData: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserdata:(state,data: PayloadAction<Object>)=>{
      console.log(state,'state')
        state.userData = data?.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setUserdata} = authSlice.actions

export default authSlice.reducer