import React from 'react'
import { Icon } from "@iconify/react";
import {ICategoryList } from '../../interfaces';

function CategoryItem(course ?: ICategoryList) {

  return (
    <div className={`w-[312px] h-[104px] flex items-center ${course?.course.bg}`}>
        <div className='w-16 h-16 bg-white m-5 flex justify-center items-center'>
          <Icon color={course?.course.accent} className="w-8 h-8 " icon={course?.course.icon || "streamline-freehand:information-desk-question-help"}/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='font-medium text-[#1D2026] text-[16px] leading-[22px]'>
            {course?.course.title}
          </div>
          <div className='text-gray-600 text-[14px] leading-[22px]'>
            {course?.course.mount} Courses
          </div>
        </div>
    </div>
  )
}

export default CategoryItem