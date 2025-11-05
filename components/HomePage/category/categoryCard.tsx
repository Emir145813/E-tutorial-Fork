import React from 'react'
import { Icon } from "@iconify/react";
import { ICatItem } from '../../interfaces';

function CategoryItem({info , appearance} : ICatItem) {

  return (
    <div className={`w-[312px] h-[104px] flex items-center ${appearance[0].bg}`}>
        <div className='w-16 h-16 bg-white m-5 flex justify-center items-center'>
          <Icon color={appearance[0].accent} className="w-8 h-8 " icon="solar:cpu-outline"/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='font-medium text-[#1D2026] text-[16px] leading-[22px]'>
            {info[0].title}
          </div>
          <div className='text-gray-600 text-[14px] leading-[22px]'>
            {info[0].mount} Courses
          </div>
        </div>
    </div>
  )
}

export default CategoryItem