import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function HeroPage() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 justify-between bg-white'>
      <div className='flex items-center justify-center lx:justify-end'>
        <div className='flex flex-col justify-between gap-y-10'>
          <h1 className='font-semibold  text-[#1D2026] text-[42px] md:text-[62px] lg:text-[72px] sm:leading-[74px] sm:-tracking-2'>
            Learn with expert anytime anywhere
          </h1>
          <p className='text-[#4E5566] text-[24px] leading-8 h-16 sm:w-[648px]'>
            Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
          </p>
          <Button className='w-[198px] h-12 bg-orange-500 border-none hover:bg-orange-600 rounded-none text-white text-[16px]'>
            Create Account
          </Button>
        </div>
      </div>
      <div className='hidden xl:block'>
        <Image
          src="/HeroPage/header.png"
          alt='HeaderImage'
          width={1920}
          height={548}
        />
      </div>
    </div>
  )
}

export default HeroPage