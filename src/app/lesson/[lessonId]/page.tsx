import CodeField from '@/components/CodeField'
import SubmitBtn from '@/components/SubmitBtn'
import Task from '@/components/Task'
import React from 'react'

export type Params = {
        params: {
            lessonId: number
        }
}

const Lesson = ({params}:Params) => {
  return (
    <div className='bg-zinc-200 flex flex-col justify-around 
    px-4 md:w-[700px] lg:w-[1000px] w-72 h-5/6 items-center shadow-md rounded-lg text-xs lg:text-lg'>
        <Task params={params} />
        <CodeField />
        <SubmitBtn params={params}/>
        </div>
  )
}

export default Lesson