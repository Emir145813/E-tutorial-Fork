import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import CourseCard from './CourseCard'
import { ICourse } from '@/components/interfaces';

async function BestSellingCourse() {

  const result = await fetch('http://localhost:4000/courses');
  const courseData = await result.json();

  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center p-20 gap-10'>
      <div>
        <SegmentHeader>
          Best Selling Courses
        </SegmentHeader>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px]'>
        {
          courseData && courseData.map((course : ICourse) => (
            <CourseCard key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSellingCourse