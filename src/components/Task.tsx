import { Params } from '@/app/lesson/[lessonId]/page'
import { DataType } from '@/lessons'
import getLesson from '@/lib/lessons'
import React from 'react'

const Task = async({params}:Params) => {
    const lesson: DataType = await getLesson(params.lessonId - 1)
    console.log(lesson)
  return (
    <div className='w-1/2'>
        <p>{lesson.task}</p>
    </div>
  )
}

export default Task