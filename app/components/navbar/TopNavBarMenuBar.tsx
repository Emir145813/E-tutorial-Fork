import React from 'react'
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

function TopNavBarMenuBar() {
  return (
    <div className='flex'>
      <div>
        <NativeSelect className='text-gray-400 border-none bg-gray-900'>
          <NativeSelectOption value="USD">USD</NativeSelectOption>
          <NativeSelectOption value="EURO">EURO</NativeSelectOption>
        </NativeSelect>
      </div>
      <div>
        <NativeSelect className='text-gray-400 border-none bg-gray-900'>
          <NativeSelectOption value="English">English</NativeSelectOption>
          <NativeSelectOption value="French">French</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}

export default TopNavBarMenuBar