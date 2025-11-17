import React from 'react'
import CategoryItem from './categoryCard'
import SegmentHeader from '../../SegmentHeader'
import { Icon } from '@iconify/react'
import categoryModel from '@/lib/Models/categoryModel'
import connectDB from '@/lib/db'
import {ICourse} from '@/components/interfaces'



async function Category() {

  await connectDB()
  const courses : ICourse[] = JSON.parse(
    JSON.stringify(await categoryModel.find())
  );
  console.log(courses);
  
  return (
    <div className='flex flex-col justify-center items-center gap-y-10 py-20'>
      <div>
        <SegmentHeader>
          Browse top category
        </SegmentHeader>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          courses.map((item)=>(
            <CategoryItem key={item.title} course={item}/>
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