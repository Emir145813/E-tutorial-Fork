import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import FeatureCourseCard from './featureCourseCard'
import { ICourceInfo, ICourse } from '@/components/interfaces'

async function FeatureCourses() {

  const result = await fetch("http://localhost:4000/courses?_page=1&_per_page=4")
  const courseData = await result.json()
  const courseArray = courseData.data

  return (
    <div className='flex justify-center items-center -mt-[253px]'>
      <div className='bg-white w-[1480px] h-[650px] p-20 flex flex-col justify-center items-center gap-10 border border-gray-100'>
        <div className='w-[1320px] h-12 flex justify-between items-center'>
          <div>
            <SegmentHeader>
              Our feature courses
            </SegmentHeader>
          </div>
          <div className='w-[424px] h-11'>
            <p className='text-[14px] leading-[22px] -translate-px text-gray-700 font-semibold'>
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.
            </p>
          </div>
        </div>
        <div className='w-[1320px] h-[402px] grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            courseArray.map((course : ICourse) => (
              <FeatureCourseCard key={course.id} course={course}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FeatureCourses