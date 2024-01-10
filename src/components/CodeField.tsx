'use client'
import { setBtnState, setCode } from '@/redux/slice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'

const CodeField = () => {
    const state = useAppSelector(state => state.slice)
    const dispatch = useAppDispatch()

    const handleCode = (e: any) => {
        dispatch(setCode(e.target.value))
        dispatch(setBtnState(false))
        
        if(e.target.value === '') {
          dispatch(setBtnState(true))
        }
    }
    
  return (
    <textarea
    className='text-sm resize-none p-4 w-full h-[200px]'
     value={state.code} 
     onChange={handleCode}>
     </textarea>
  )
}

export default CodeField