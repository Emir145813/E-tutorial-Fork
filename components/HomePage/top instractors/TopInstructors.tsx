import SegmentHeader from '@/components/SegmentHeader'
import React from 'react'
import InstructorCard from './InstructorCard'
import { ICourse, IInstructor } from '@/components/interfaces'
import { Icon } from '@iconify/react'

async function TopInstructors() {

  const result = await fetch("http://localhost:4000/instructors")
  const courses = await result.json()

  return (
    <div className='flex flex-col items-center justify-center bg-white'>
      <div className='flex flex-col justify-center items-center gap-10 p-20 -mt-60 bg-white border border-gray-100'>
        <SegmentHeader>
          Top instructor of the month
        </SegmentHeader>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px]'>
          {
            courses.map((instructor : IInstructor) => (
              <InstructorCard key={instructor.id} instructor={instructor}/>
            ))
          }
        </div>
        <div className='flex justify-center items-center gap-x-3 text-[14px]'>
          <p className='text-[#4E5566] leading-[22px]'>
            Thousands of students waiting for a instructor. Start teaching & earning now!.
          </p>
          <div className='flex justify-center items-center gap-2 text-[#FF6636]'>
            <p className='leading-5'>
              Become Instructor
            </p>
            <Icon width={24} height={24} icon="solar:arrow-right-linear"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopInstructors