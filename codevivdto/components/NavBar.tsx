import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-toggle'


const NavBar = () => {
  return (
    <nav className='h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center'>
      <div className='font-extrabold text-xl'>
        .vivdtoSpace
      </div>
      <ul className='flex w-full justify-end space-x-4 items-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li className='flex space-x-2'>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Signup</Link>
          </Button>
          <ModeToggle/>

        </li>
      </ul>
    </nav>
  )
}

export default NavBar
