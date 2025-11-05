import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import CourseCard from './CourseCard'
import { ICourse } from '@/components/interfaces';

async function BestSellingCourse() {

  const result = await fetch('http://localhost:4001/courses');
  const courseData = await result.json();

  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center p-20 gap-10'>
      <div>
        <SegmentHeader>
          Best Selling Courses
        </SegmentHeader>
      </div>
      <div className='grid grid-cols-5 gap-[25px]'>
        {
          courseData && courseData.map((item : ICourse) => (
            <CourseCard key={item.id} title={item.title} prise={item.prise} raiating={item.raiating} tumbnail={item.tumbnail} students={item.students} category={item.category}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSellingCourse