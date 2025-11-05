import React, { ReactNode } from 'react'
import { IChildren } from './interfaces'

function SegmentHeader(children : IChildren) {
  return (
    <h2 className='text-[40px] text-[#1D2026] font-semibold leading-12'>
      {children.children}
    </h2>
  )
}

export default SegmentHeader