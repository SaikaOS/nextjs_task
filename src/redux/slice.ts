'use client'
import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  code: string
  answer: boolean | string
  btnState: boolean
}

const initialState: IState = {
  code: '',
  answer: '',
  btnState: true
}

export const mySlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload
    },
    setAnswer: (state, action) => {
      state.answer = action.payload
    },
    setBtnState: (state, action) => {
      state.btnState = action.payload
    }
  },
})

export const { setCode, setAnswer, setBtnState } = mySlice.actions

export default mySlice.reducer