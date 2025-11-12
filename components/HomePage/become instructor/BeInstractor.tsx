import TintedButton from '@/components/ui/tintedButton'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'

function BeInstractor() {

  const learningStep = [
    {
      id: 1,
      title : "Apply to become instructor",
      step: 1,
      bgColor: "bg-[#EBEBFF]",
      accentColor : "text-[#564FFD]"
    },
    {
      id: 2,
      title : "Build & edit your profile",
      step: 2,
      bgColor: "bg-[#FFF0F0]",
      accentColor : "text-[#FF6636]"
    },
    {
      id: 3,
      title : "Create your new course",
      step: 3,
      bgColor: "bg-[#FFF0F0]",
      accentColor : "text-[#E34444]"
    },
    {
      id: 4,
      title : "Start teaching & earning",
      step: 4,
      bgColor: "bg-[#E1F7E3]",
      accentColor : "text-[#23BD33]"
    }
  ]



  return (
    <div className='bg-gray-50 pt-[80.5px] pb-80'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        <div className='bg-linear-to-r from-orange-600 to-orange-500 relative flex flex-col justify-center items-start p-10 gap-6 lg:w-[648px] h-[270px]'>
          <Image
            src="/Become Instracture/Become-an-Instructor.png"
            alt='Become Instructor'
            width={230}
            height={200}
            className='absolute right-0 bottom-0 hidden lg:block'
            />
          <div className='flex flex-col gap-3 items-start'>
            <h1 className='text-white text-[32px] leading-10 -tracking-px font-semibold'>
              Become an instructor
            </h1>
            <p className='text-white text-[16px] leading-[22px] -tracking-px w-[311px]' >
              Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
            </p>
          </div>
          <TintedButton>
            Start teaching
          </TintedButton>
        </div>
        <div className='flex flex-col gap-[27px] p-10 bg-white'>
          <p className='text-[32px] leading-10 -tracking-px font-semibold text-gray-900'>
            Your teaching & earning steps
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
              learningStep.map((step)=>(
                <div key={step.id} className='flex gap-4 items-center justify-start' >
                  <span className={`text-[24px] w-[52px] h-[52px] flex justify-center items-center ${step.bgColor} ${step.accentColor} rounded-4xl`}>
                    {
                      step.step
                    }
                  </span>
                  {
                    step.title
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeInstractor