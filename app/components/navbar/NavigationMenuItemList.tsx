import React from 'react'
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function NavigationMenuItemList() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className='h-12 bg-white border border-gray-100 rounded-none text-[16px] leading-6 text-gray-700 px-[18px] flex justify-between items-center'
              >Browse
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/">
                Home
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavigationMenuItemList