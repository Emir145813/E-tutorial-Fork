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

async function RecentCourse() {

  const result = await fetch('http://localhost:4000/courses?_start=0&_end=4');
  const courses = await result.json();

  return (
    <div className=' bg-amber-500 flex items-center flex-col py-20 gap-10'>
      <SegmentHeader>
        Recently added courses
      </SegmentHeader>
      <div className='grid grid-cols-4 gap-6'>
        {
          courses.map((course : ICourse)=> (
          <HoverCard>
            <HoverCardTrigger>
              <RecentCourseCard key={course.id} course={course}/>
            </HoverCardTrigger>
            <HoverCardContent>
              <RecentCourseCardHower key={course.id} course={course}/>
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