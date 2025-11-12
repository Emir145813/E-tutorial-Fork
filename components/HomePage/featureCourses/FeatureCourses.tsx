import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import FeatureCourseCard from './featureCourseCard'
import { ICourceInfo, ICourse } from '@/components/interfaces'

async function FeatureCourses() {

  const result = await fetch("http://localhost:4000/courses?_start=0&_end=4")
  const courseData = await result.json()
  const courseArray = courseData.data

  return (
    <div className='flex justify-center items-center -mt-[253px]'>
      <div className='bg-white p-20 flex flex-col justify-center items-center gap-10 border border-gray-100'>
        <div className='flex flex-col sm:flex-row justify-between items-center xl:gap-[517px]'>
          <div>
            <SegmentHeader>
              Our feature courses
            </SegmentHeader>
          </div>
          <div>
            <p className='text-[14px] leading-[22px] -translate-px text-gray-700 font-semibold sm:w-[424px]'>
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-6'>
          {
            courseData.map((course : ICourse) => (
              <FeatureCourseCard key={course.id} course={course}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FeatureCourses