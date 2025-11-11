import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=' bg-gray-900'>
      <div className='shadow-[0px_-1px_0px_0px_#363B4780] flex justify-center items-center gap-[136px] border-b border-[#363B4780] py-[100px]'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-[40px] leading-12 -tracking-px w-[536px] font-semibold text-white' >
            Start learning with 67.1k students around the world.
          </h2>
          <div className='text-[16px] leading-12 text-white flex gap-4 '>
            <button className='bg-[#FF6636] px-6 cursor-pointer'>
              Join the Family
            </button>
            <button className='bg-white/5 px-6 cursor-pointer'>
              Browse all courses
            </button>
          </div>
        </div>
        <div className='flex gap-6 text-white'>
          <div className='flex flex-col gap-3 '>
            <h2 className='text-[40px] leading-12 -tracking-px'>
              6.3k
            </h2>
            <p className='text-[16px] leading-[22px] text-gray-300'>
              Online courses
            </p>
          </div>
          <div className='flex flex-col gap-3 '>
            <h2 className='text-[40px] leading-12 -tracking-px'>
              26k
            </h2>
            <p className='text-[16px] leading-[22px] text-gray-300'>
              Certified Instructor
            </p>
          </div>
          <div className='flex flex-col gap-3 '>
            <h2 className='text-[40px] leading-12 -tracking-px'>
              99.9%
            </h2>
            <p className='text-[16px] leading-[22px] text-gray-300'>
              Sucess Rate
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center border-b border-[#363B4780] py-20'>
        <div className='flex flex-row gap-6'>
          <div className='flex flex-col gap-[26px]'>
            <div className='flex flex-col gap-5'>
              <Image
                src="/Footer/LOGO.png"
                alt='E-Tutor Logo'
                width={175.1999969482422}
                height={46}
              />
              <p className='w-[424px] font-[14px] leading-[22px] text-gray-500'>
                Aliquam rhoncus ligula est, non pulvinar elit
                convallis nec. Donec mattis odio at.
              </p>
            </div>
            <div>
              <div className='flex gap-3 text-white'>
                <Link className='w-12 h-12 bg-[#363B4766] flex justify-center items-center hover:bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#CC522B80] hover:text-white' href="/">
                  <Icon icon="ph:facebook-logo" width="24" height="24" />
                </Link>
                <Link className='w-12 h-12 bg-[#363B4766] flex justify-center items-center hover:bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#CC522B80] hover:text-white' href="/">
                  <Icon icon="ph:instagram-logo" width="24" height="24" />
                </Link>
                <Link className='w-12 h-12 bg-[#363B4766] flex justify-center items-center hover:bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#CC522B80] hover:text-white' href="/">
                  <Icon icon="ph:linkedin-logo" width="24" height="24" />
                </Link>
                <Link className='w-12 h-12 bg-[#363B4766] flex justify-center items-center hover:bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#CC522B80] hover:text-white' href="/">
                  <Icon icon="ph:twitter-logo" width="24" height="24" />
                </Link>
                <Link className='w-12 h-12 bg-[#363B4766] flex justify-center items-center hover:bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#CC522B80] hover:text-white' href="/">
                  <Icon icon="ph:youtube-logo" width="24" height="24" />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-6'> 
            <span className='flex flex-col gap-6 w-[200px]'>
              <p className='text-[14px] font-medium text-white'>
                Top 4 Category
              </p>
              <div className='text-[14px] leading-[22px] text-gray-500 -tracking-px flex flex-col justify-center items-start gap-3'>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Development
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Finance & Accounting
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Design
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Business
                </Link>
              </div>
            </span>
            <span className='flex flex-col gap-6 w-[200px]'>
              <p className='text-[14px] font-medium text-white'>
              Quick Links
              </p>
              <div className='text-[14px] leading-[22px] text-gray-500 -tracking-px flex flex-col justify-center items-start gap-3'>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  About
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Become Instructor
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Contact
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Career
                </Link>
              </div>
            </span>
            <span className='flex flex-col gap-6 w-[200px]'>
              <p className='text-[14px] font-medium text-white'>
                Support
              </p>
              <div className='text-[14px] leading-[22px] text-gray-500 -tracking-px flex flex-col justify-center items-start gap-3'>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Help Center
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  FAQs
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Terms & Condition
                </Link>
                <Link className='hover:shadow-[0px_1.5px_0px_0px_#FF6636] hover:text-white' href="">
                  Privacy Policy
                </Link>
              </div>
            </span>
            <div className='flex flex-col gap-5'>
              <p className='text-[14px] font-medium text-white'>
                Downlaod our app
              </p>
              <div className='flex flex-col gap-3'>
                <Link className='flex justify-center items-center gap-3.5 px-5 py-[13px] bg-[#363B4766]' href="/">
                  <Image
                    src="/Footer/apple.png"
                    alt="apple store"
                    width={40}
                    height={40}
                  />
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-[10px] leading-2.5 text-[#363B4766]'>
                      Download now
                    </span>
                    <span className='text-white text-[16px] leading-[22px]'>
                      App Store
                    </span>
                  </div>
                </Link>
                <Link className='flex justify-center items-center gap-3.5 px-5 py-[13px] bg-[#363B4766]' href="/">
                  <Image
                    src="/Footer/google-play.png"
                    alt="apple store"
                    width={40}
                    height={40}
                  />
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-[10px] leading-2.5 text-[#363B4766]'>
                      Download now
                    </span>
                    <span className='text-white text-[16px] leading-[22px]'>
                      App Store
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-[300px] flex flex-row justify-between items-center py-6'>
        <p className='text-[#8C94A3] text-[14px] leading-[22px] -tracking-px'>
          © {new Date().getFullYear()} - Eduflex. Designed by <span className='text-white'>Templatecookie</span>. All rights reserved
        </p>
        <div className='px-4 py-3 bg-gray-900 border border-gray-800'>
          <NativeSelect className='text-gray-500 border-none bg-gray-900'>
            <NativeSelectOption value="English">English</NativeSelectOption>
            <NativeSelectOption value="French">French</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
    </div>
  )
}

export default Footer