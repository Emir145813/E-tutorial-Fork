import { ICourseList } from '@/components/interfaces'
import CourseField from '@/components/ui/CourseField'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

function FeatureCourseCard(prop : ICourseList) {

  const discountCalculator = (prise : number | undefined, discount : number | undefined )=>{
    if(prise && discount != undefined){
      return prise - (prise * discount / 100)
    }else{
      return null
    }
  }


  return (
    <div className=' bg-white flex justify-center items-center border border-gray-100 '>
      <div className='w-[220px] h-[188px]'>
        <Image
          src={prop.course.thumbnail || "/Courses/CourseImage.png"}
          alt='Course Thumbnail'
          width={220}
          height={188}
        />
      </div>
      <div className='px-6 py-4 grid gap-y-[17px]'>
        <div className='w-[428px] h-[54px] flex flex-col justify-center'>
          <div className='flex justify-between items-center'>
            <CourseField fieldName={prop.course.category}/>
            <div className='flex gap-1 leading-6 -tracking-[px]'>
              {
                (prop.course.discount)
                ?
                <>
                  <span className='text-gray-900 text-[18px]'>${discountCalculator(prop.course.prise , prop.course.discount)}</span>
                  <span className='text-[#A1A5B3] line-through'>${prop.course.prise}</span>
                </>
                :
                <span className='text-gray-900'>${prop.course.prise}</span>
              }
            </div>
          </div>
          <div>
            <p>
              {prop.course.title}
            </p>
          </div>
        </div>
        <div className='w-[428px] h-7 flex justify-between items-center'>
          <div className='flex items-center gap-x-3'>
            <div className='h-7 w-7 rounded-4xl bg-white'></div>
            <span className='text-[14px] text-gray-700 leading-[22px]'>{prop.course.teacher}</span>
          </div>
          <div className='flex justify-center items-center gap-[5px]'>
            <Icon width={20} height={20} color='#FD8E1F' icon="solar:star-bold"/>
            <div className='-tracking-px flex justify-center items-center gap-[5px]'>
              <span className='font-medium text-gray-900 leading-5'>
                {prop.course.raiating}
              </span>
              <span className='text-gray-500 text-[16px]'>
                ({prop.course.veiwerMount})
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className='w-[428px] h-[22px] flex gap-[49px]'>
          <div className='flex justify-center items-center gap-1.5'>
            <Icon icon="solar:user-bold" width={20} height={20} color='#564FFD'/>
            <div className='flex justify-center items-center text-[14px] gap-1'>
              <span className='font-medium text-gray-700 leading-5'>
                {prop.course.students}
              </span>
              <span className='leading-[22px] text-[#8C94A3]'>
                students
              </span>
            </div>
          </div>
          <div className='flex gap-1'>
            <Icon icon="solar:chart-square-outline" width={20} height={20} color='#E34444'/>
            <span className='font-medium text-gray-700 leading-5'>
              {prop.course.level}
            </span>
          </div>
          <div className='flex gap-1'>
            <Icon icon="solar:clock-circle-outline" width={20} height={20} color='#23BD33'/>
            <span className='font-medium text-gray-700 leading-5'>
              {prop.course.courseTime} hour
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCourseCard