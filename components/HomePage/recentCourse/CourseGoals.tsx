import { Icon } from '@iconify/react'
import React from 'react'

function CourseGoals() {
  return (
    <div className='flex flex-row gap-2'>
      <Icon className='w-6 h-6 ' icon="solar:check-square-linear" height={24} width={24} color='#23BD33'/>
      <span className='text-[16px] text-gray-600 -tracking-px leading-[22px]'>
        Learn to use Python professionally, learning both Python 2 and Python 3!
      </span>
    </div>
  )
}

export default CourseGoals