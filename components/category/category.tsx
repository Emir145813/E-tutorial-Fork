import React from 'react'
import CategoryItem from './categoryCard'
import { log } from 'console'
import { ICatItem } from '../interfaces'
import SegmentHeader from '../SegmentHeader'
import { Icon } from '@iconify/react'

async function Category() {

  const result = await fetch("http://localhost:4000/courses")
  const cources = await result.json()
  console.log(cources);
  

  return (
    <div className='flex flex-col justify-center items-center gap-y-10 py-20'>
      <div className='text-[40px] text-[#1D2026] font-semibold leading-12'>
        <SegmentHeader>
          Browse top category
        </SegmentHeader>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          cources.map((item : ICatItem)=>(
            <CategoryItem key={item.id} id={item.id} info={item.info} appearance={item.appearance}/>
          ))
        }
      </div>
      <div className='flex justify-center items-center gap-x-3 text-[14px]'>
        <p className='text-[#4E5566] leading-[22px]'>
          We have more category & subcategory.
        </p>
        <div className='flex justify-center items-center gap-2 text-[#FF6636]'>
          <p className='leading-5'>
          Browse All
          </p>
          <Icon width={24} height={24} icon="solar:arrow-right-linear"/>
        </div>
      </div>
    </div>
  )
}

export default Category