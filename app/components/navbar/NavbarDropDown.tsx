import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@iconify/react";
import Link from 'next/link';

function NavbarDropDown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icon icon="material-symbols:menu-rounded"
            className='text-white text-2xl'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cources">
              Courses
            </Link>
            </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/account">
              Accound
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">
              Contact
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="become-an-instructor">
              Become an instructor
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default NavbarDropDown