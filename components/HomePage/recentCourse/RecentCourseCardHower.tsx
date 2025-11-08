import { ICourseList } from '@/components/interfaces'
import CourseField from '@/components/ui/CourseField'
import TintedButton from '@/components/ui/tintedButton'
import { Icon } from '@iconify/react'
import React from 'react'

function RecentCourseCardHower(prop : ICourseList) {

  const discountCalculator = (prise : number | undefined, discount : number | undefined )=>{
    if(prise && discount != undefined){
      return prise - (prise * discount / 100)
    }else{
      return null
    }
  }

  return (
    <div className='w-[424px] h-[670px] flex flex-col gap-10 border border-gray-100 bg-white'>
      <div className='flex flex-col gap-4 border-b border-gray-100 py-5'>
        <div className='mx-5 flex flex-col justify-start items-start gap-2.5'>
          <span>
            <CourseField fieldName='Development'/>
          </span>
          <p className='text-[18px] text-[#1D2026] leading-6 font-medium'>
            2021 Complete Python Bootcamp From Zero to Hero in Python
          </p>
        </div>
        <div className='w-[424px] h-12 px-5 flex justify-between items-center'>
          <div className='flex flex-row gap-3'>
            <div className='h-12 w-12 rounded-4xl bg-amber-300' >

            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='text-[14px] text-[#8C94A3] leading-[22px] -tracking-px'>
                Course By
              </span>
              <span className='text-[14px] text-[#1D2026] leading-[22px] -tracking-px'>
                Kevin Gilbert
              </span>
            </div>
          </div>
          <div className='w-[113px] h-[22px] gap-6 flex flex-row justify-center items-center'>
          <div className='flex justify-center items-center gap-[5px]'>
            <Icon width={20} height={20} color='#FD8E1F' icon="solar:star-bold"/>
            <div className='-tracking-px flex justify-center items-center gap-[5px]'>
              <span className='font-medium text-gray-900 text-[16px] leading-5'>
                5.0
              </span>
              <span className='text-gray-600 text-[14px] -tracking-px leading-[22px]'>
                45278
              </span>
            </div>
          </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-[49px]'>
          <div className='flex justify-center items-center gap-1.5'>
            <Icon icon="solar:user-bold" width={20} height={20} color='#564FFD'/>
            <div className='flex justify-center items-center text-[14px] gap-1'>
              <span className='font-semibold text-[14px] text-gray-700 leading-[22px] -tracking-px'>
                42542
              </span>
              <span className='leading-[22px] text-[14px] text-gray-700 -tracking-px'>
                students
              </span>
            </div>
          </div>
          <div className='flex gap-1'>
            <Icon icon="solar:chart-square-outline" width={20} height={20} color='#E34444'/>
            <span className='text-[14px] leading-[22px] -tracking-px text-gray-700'>
              Beginner
            </span>
          </div>
          <div className='flex gap-1'>
            <Icon icon="solar:clock-circle-outline" width={20} height={20} color='#23BD33'/>
            <span className='leading-[22px] text-[14px] text-gray-700 -tracking-px'>
              5 hour
            </span>
          </div>
        </div>
        <div className=' mx-5 flex flex-row justify-between items-center'>
          <div className='flex gap-2.5'>
            <div className='flex justify-start items-center gap-1 leading-6 -tracking-[px]'>
              {
                (prop.course.discount)
                ?
                <>
                  <span className='text-gray-900 text-[24px] leading-8'>${discountCalculator(prop.course.prise , prop.course.discount)}</span>
                  <span className='text-[#A1A5B3] line-through text-[16px] leading-6'>${prop.course.prise}</span>
                </>
                :
                <span className='text-gray-900 text-[24px] leading-8'>${prop.course.prise}</span>
              }
            </div>
            <div className='text-[14px] text-[#FF6636] bg-[#FFEEE8] font-medium px-3 py-2'>
              {prop.course.discount}% OFF
            </div>
          </div>
          <div className='p-3 bg-[#FFEEE8]'>
            <Icon icon="solar:heart-angle-outline" width={24} height={24} color='#FF6636'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentCourseCardHower