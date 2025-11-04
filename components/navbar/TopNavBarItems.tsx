"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavbarDropDown from './NavbarDropDown'

function TopNavBarItems() {

  const navitems = [
    {
      id: 1,
      name: "Home",
      href : "/"
    },
    {
      id: 2,
      name: "Courses",
      href : "/courses"
    },
    {
      id: 3,
      name: "About",
      href : "/about"
    },
    {
      id: 4,
      name: "Contact",
      href : "/contact"
    },
      {
      id: 5,
      name: "Become an Instructor",
      href : "/instructor"
    },
  ]

  const pathname = usePathname();

  return (
    <div className='font-medium'>
      <ul className='justify-center items-center gap-8 h-13 hidden md:flex '>
        {
          navitems.map((navItem)=>(
            <li key={navItem.id} className={pathname === navItem.href ? "border-t-2 border-[#FF6636] text-white h-full flex justify-center items-center" : "text-gray-400 flex justify-center items-center"}>
              <Link href={navItem.href} 
              className='text-[14px] leading-5'
              >
                {
                  navItem.name
                }
              </Link>
            </li>
          ))
        }
      </ul>
      <div className='block md:hidden'>
        <NavbarDropDown/>
      </div>
    </div>
  )
}

export default TopNavBarItems