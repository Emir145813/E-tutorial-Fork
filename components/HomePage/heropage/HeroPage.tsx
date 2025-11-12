import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function HeroPage() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 justify-between bg-white text-center md:text-start'>
      <div className='flex items-center justify-center lx:justify-end'>
        <div className='flex flex-col justify-between  items-center lg:items-start gap-y-2 lg:gap-y-10'>
          <h1 className='font-semibold lg:w-[648px] text-[#1D2026] text-[28px] sm:text-[32px] md:text-[42px] lg:text-[72px] sm:leading-[74px] sm:-tracking-2'>
            Learn with expert anytime anywhere
          </h1>
          <p className='text-[#4E5566] text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-8 sm:w-[648px]'>
            Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
          </p>
          <Button className='px-4 lg:px-8 h-12 leading-14 text-[14px] lg:text-[18px] font-semibold -tracking-px bg-orange-500 border-none hover:bg-orange-600 rounded-none text-white'>
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