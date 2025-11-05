import React from 'react'
import { ICourseField } from '../interfaces'

function CourseField({fieldName, bgColor, textColor} : ICourseField) {
  return (
    <div>
      <span className={`text-[10px] font-medium leading-3 py-1 px-1.5 flex justify-center items-center ${bgColor ? bgColor : 'bg-[#E0E0E0]'} ${textColor ? textColor : 'text-[#1D2026]' }`}>
        {fieldName?.toUpperCase()}
      </span>
    </div>
  )
}

export default CourseField