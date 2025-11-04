import React from 'react'
import TopNavBarItems from './TopNavBarItems'
import TopNavBarMenuBar from './TopNavBarMenuBar'
import BottomNavBar from './bottomNavBar'

function NavBar() {
  return (
    <div className='border-b border-gray-100'>
      <div className='bg-[#1D2026] px-8 h-[52px] flex justify-between items-center'>
        <TopNavBarItems/>
        <TopNavBarMenuBar/>
      </div>
      <BottomNavBar/>
    </div>
  )
}

export default NavBar