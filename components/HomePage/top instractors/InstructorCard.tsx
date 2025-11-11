import { ICourse, ICourseList, IInstructor, IInstructorList } from '@/components/interfaces'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

function InstructorCard(prop : IInstructorList) {
  return (
    <div className=' flex flex-col bg-white border border-gray-100'>
      <div>
        <Image
          src={prop.instructor.thumbnail}
          alt='Instructor Image'
          width={244}
          height={244}
        />
      </div>
      <div className='py-3 px-4 border-b border-gray-100 flex flex-col gap-1 '>
        <h4 className='text-center text-[16px] text-gray-900 leading-[22px] font-medium'>
          {prop.instructor.name}
        </h4>
        <p className='text-center text-[14px] leading-[22px]'>
          {prop.instructor.skill}
        </p>
      </div>
      <div className='my-3 px-4 flex flex-row justify-between'>
        <div className='flex items-center gap-1'>
          <span>
            <Icon width={16} height={16} color='#FD8E1F' icon="solar:star-bold"/>
          </span>
          <span className='text-[14px] text-[#4E5566] leading-5 font-medium'> 
            {prop.instructor.raiting}
          </span>  
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-[#4E5566] leading-5'>
            {prop.instructor.studends}
          </span>
          <span className='text-[#8C94A3] leading-[22px] pl-1'>
            students
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default InstructorCard