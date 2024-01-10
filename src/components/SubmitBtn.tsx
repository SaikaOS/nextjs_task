'use client'
import { postLesson } from '@/lib/lessons'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'
import { setAnswer, setBtnState } from '@/redux/slice'
import { data } from '@/lessons'
import { Params } from '@/app/lesson/[lessonId]/page'

const SubmitBtn = ({params}: Params) => {
    const {code, answer, btnState} = useAppSelector(state => state.slice)
    const dispatch = useAppDispatch()

    const handleClick = async() => {
        try {
          dispatch(setBtnState(true))
          const lesson = await postLesson(params.lessonId, code)
          dispatch(setAnswer(lesson.submissionResult))
          data[params.lessonId].userAttempts += 1
          dispatch(setBtnState(false))

          console.log(code)
          console.log(lesson)
          
        } catch (error) {
          dispatch(setBtnState(false))
        }
      }

  return (
    <div className='flex items-center justify-between w-36 md:w-60'>
        <button
         type='submit'
         onClick={handleClick}
         disabled={btnState}
         className={`md:py-4 md:px-12 py-2 px-6 ml-10 rounded-md uppercase
         ${btnState ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-white'}`}>
            Send 
            </button>
            <p>{answer.toString()}</p>
    </div>
  )
}

export default SubmitBtn