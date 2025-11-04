import React, { ReactNode } from 'react'
import { IChildren } from './interfaces'

function SegmentHeader(children : IChildren) {
  return (
    <h2>
      {children.children}
    </h2>
  )
}

export default SegmentHeader