import CourseField from '@/components/ui/CourseField'
import { Icon } from '@iconify/react'
import React from 'react'

function CourseCard() {
  return (
    <div className=' bg-white flex flex-col items-center justify-start gap-3.5'>
      <div className='h-[183px] w-[244px]'>
        {/* todo : add Image */}
      </div>
      <div className='px-3.5 flex flex-col justify-center gap-2.5'>
        <div>
          <div className='flex justify-between items-center'>
            <span>
              <CourseField fieldName='design' bgColor="bg-[#FFEEE8]" textColor='text-[#993D20]'/>
            </span>
            <span className='text-[#FF6636] font-semibold text-4 leading-[22px]'>
              ${19.99}
            </span>
          </div>
        </div>
        <div>
          <p className='text-[14px] text-[#1D2026] leading-5 font-medium -tracking-[1] w-[216px] h-10 line-clamp-2'>
            Machine Learning A-Z™: Hands-On Python & R In Data ...
          </p>
        </div>
      </div>  
      <hr className='border border-gray-100/70 block w-full'/>
      <div className='flex w-full justify-between items-center px-3.5 mb-3.5'>
        <div className='flex justify-center items-center gap-1'>
          <span>
            <Icon width={16} height={16} color='#FD8E1F' icon="solar:star-bold"/>
          </span>
          <span className='text-[14px] text-[#4E5566] leading-5 font-medium'> 
            5.0
          </span>
        </div>
        <div className='text-[14px] -translate-[1] flex justify-center items-center'>
          <span className='text-[#4E5566] leading-5'>
            265.7K
          </span>
          <span className='text-[#8C94A3] leading-[22px] pl-1'>
            students
          </span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard