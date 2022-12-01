import { createSlice } from '@reduxjs/toolkit'

const initialCpt = {
  cpt: 0,
}

export const compteurSlice = createSlice({
  name: 'compteur',
  initialState: initialCpt,
  reducers: {
    increment: (state) => {
      state.cpt += 1
    },
    decrement: (state) => {
      state.cpt -= 1
    }
  },
})

export const { increment, decrement } = compteurSlice.actions

export default compteurSlice.reducer