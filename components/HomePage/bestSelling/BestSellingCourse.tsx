import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import CourseCard from './CourseCard'
import { ICourse } from '@/components/interfaces';
import bestSellingModel from '@/lib/Models/courseModel';

async function BestSellingCourse() {


  const courseData : ICourse[] = JSON.parse(
    JSON.stringify(await bestSellingModel.find())
  ) 
  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center pt-20 pb-80 gap-10 '>
      <div>
        <SegmentHeader>
          Best Selling Courses
        </SegmentHeader>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px]'>
        {
          courseData && courseData.map((item : ICourse) => (
            <CourseCard key={item.title} course={item} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSellingCourse