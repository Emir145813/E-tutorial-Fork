import { ICompany } from '@/components/interfaces'
import Image from 'next/image'
import React from 'react'

function TrustedCompanies() {

  const companies = [
    {
      id : 1,
      img : "/companies-logo/google.svg"
    },
    {
      id : 2,
      img : "/companies-logo/lenovo.svg"
    },
    {
      id : 3,
      img : "/companies-logo/lexmark.svg"
    },
    {
      id : 4,
      img : "/companies-logo/microsoft.svg"
    },
    {
      id : 5,
      img : "/companies-logo/netflix.svg"
    },
    {
      id : 6,
      img : "/companies-logo/slack.svg"
    },
    {
      id : 7,
      img : "/companies-logo/verizon.svg"
    },
    {
      id : 8,
      img : "/companies-logo/youtube.svg"
    }
  ]

  return (
    <div className=' flex flex-col xl:flex-row justify-center items-center gap-6 py-20'>
      <div className='flex flex-col gap-6 justify-center items-center md:items-start text-center lg:text-start'>
        <p className='text-[25px] lg:text-[32px] leading-10 -tracking-px font-semibold text-gray-900'>
          6.3k trusted companies
        </p>
        <span className='text-[14px] leading-[22px] text-gray-600 -tracking-px w-[312px]'>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </span>
      </div>
      <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          companies.map((company : ICompany) =>(
            <div key={company.id} className='w-[200px] h-[100px] flex justify-center items-center bg-white shadow-[0px_0px_32px_0px_#091A4412]'>
              <Image
                src={company.img}
                alt='Company Logo'
                width={100}
                height={100}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TrustedCompanies