import Image from 'next/image'
import React from 'react'
import NavigationMenuItemList from './NavigationMenuItemList'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icon } from '@iconify/react'

function BottomNavBar() {
  return (
  <div>
    <div className='h-24 flex justify-between items-center px-2 sm:px-8'>
      <div className=' h-12 flex gap-[50px]'>
        <div className='hidden justify-center items-center sm:flex'>
          <Image
            src="/NavBar/LOGO.png"
            alt='E-Tutor Logo'
            width={153}
            height={40}
          />
        </div>
        <div className='h-12 justify-between flex gap-4'>
          <div className='hidden lg:block'>
            <NavigationMenuItemList/>
          </div>
          <div className='relative'>
            <Input placeholder="What do you want learn..." className='w-[212px] lg:w-[424px] h-12 bg-white border border-gray-100 rounded-none focus:border focus:border-gray-300 pl-[54px] text-[16px] text-gray-500 font-regular'/>
            <Image
              src="/NavBar/MagnifyingGlass.png"
              alt='search icon'
              height={24}
              width={24}
              className='absolute left-[18px] top-3'
            />
          </div>
        </div>
      </div>
      <div className='w-[424px] h-12 flex justify-end items-center'>
        <div className='h-12 hidden items-center justify-start gap-6 sm:flex'>
          <Link href="/">
            <Image
              src='/NavBar/Bell.png'
              alt='Bell'
              width={24}
              height={24}
            />
          </Link>
          <Link href="/">
            <Image
              src='/NavBar/Heart.png'
              alt='Bell'
              width={24}
              height={24}
            />
          </Link>
          <Link href="/">
            <Image
              src='/NavBar/ShoppingCartSimple.png'
              alt='Bell'
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className='h-12 flex justify-between items-center gap-3 pl-2'>
          <Button className='w-[168px] h-12 bg-orange-100 border-none hover:bg-orange-200 rounded-none text-orange-500 text-[16px] hidden sm:block'>
            Create Account
          </Button>
          <Button className='w-[100px] h-12 bg-orange-500 border-none hover:bg-orange-600 rounded-none text-white text-[16px] hidden sm:block'>
            Sign In
          </Button>
          <Link href="/signin">
            <Icon className='block sm:hidden' icon="solar:user-broken" width={24} height={24} color="#1D2026"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BottomNavBar