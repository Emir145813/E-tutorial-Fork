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
    <div className='flex items-center flex-col py-20 gap-10'>
      <SegmentHeader>
        Recently added courses
      </SegmentHeader>
      <div className='grid grid-cols-4 gap-6 relative'>
        {
          courses.map((course : ICourse)=> (
          <HoverCard key={course.id}>
            <HoverCardTrigger asChild>
              <RecentCourseCard  course={course}/>
            </HoverCardTrigger>
            <HoverCardContent side="right">
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