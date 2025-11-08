import { Icon } from '@iconify/react'
import React from 'react'
import { IChildren } from '../interfaces'

function TintedButton(children: IChildren) {
  return (
    <button className=' bg-[#FFEEE8] flex flex-row justify-center items-center gap-3 px-6'>
      <span className='text-[#FF6636] font-semibold text-[16px] leading-12'>
        {children.children}
      </span>
      <span>
        <Icon icon="solar:arrow-right-outline" width={24} height={24} color='#FF6636'/>
      </span>
    </button>
  )
}

export default TintedButton