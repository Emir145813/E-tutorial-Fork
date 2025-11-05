import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import CourseCard from './CourseCard'

function BestSellingCourse() {
  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center p-20 gap-10'>
      <div>
        <SegmentHeader>
          Best Selling Courses
        </SegmentHeader>
      </div>
      <div>
        <CourseCard/>
      </div>
    </div>
  )
}

export default BestSellingCourse