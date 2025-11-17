import { ICourse } from '@/components/interfaces';
import React from 'react'
import RecentCourseCard from './RecentCourseCard';
import SegmentHeader from '@/components/SegmentHeader';
import TintedButton from '@/components/ui/tintedButton';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import RecentCourseCardHower from './RecentCourseCardHower';
import connectDB from '@/lib/db';
import courseModel from '@/lib/Models/courseModel';

async function RecentCourse() {

  await connectDB();
  const courses : ICourse[] = JSON.parse(
    JSON.stringify(await courseModel.find().sort({veiwerMount : -1}).limit(4))
  )

  console.log(courses);
  
  return (
    <div className='flex items-center flex-col py-20 gap-10'>
      <SegmentHeader>
        Recently added courses
      </SegmentHeader>
      <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative'>
        {
          courses.map((course : ICourse)=> (
          <HoverCard key={course.title}>
            <HoverCardTrigger >
              <RecentCourseCard  course={course}/>
            </HoverCardTrigger>
            <HoverCardContent side='left'>
              <RecentCourseCardHower course={course}/>
            </HoverCardContent>
          </HoverCard>
          ))
        }
      </div>
      <TintedButton>
        Browse All Courses
      </TintedButton>
    </div>
  )
}

export default RecentCourse