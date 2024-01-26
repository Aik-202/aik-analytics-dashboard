import React from 'react'
import { logo } from '../../Data'
import NavItems from './NavItems'

export default function NavBar() {
  return (
    <nav className='reveal fixed bottom-0 md:bottom-auto z-10 md:z-auto md:static 
    flex md:flex-col md:space-y-8 md:py-3 md:h-[50rem] bg-[#F7F8FA] border-[1px] 
    border-solid border-[#EBECF2] dark:bg-[#131A2B] dark:border-[#111827] 
    items-center'>
        <img src={logo} alt="logo" className='hidden md:block px-3'/>
        <NavItems />
    </nav>
  )
}
