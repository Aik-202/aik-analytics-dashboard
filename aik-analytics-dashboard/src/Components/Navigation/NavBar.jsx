import React from 'react'
import { logo } from '../../Data'
import NavItems from './NavItems'

export default function NavBar() {
  return (
    <nav className='hidden md:flex flex-col space-y-8 py-3 h-[50rem] bg-[#F7F8FA] 
    border-[1px] border-solid border-[#EBECF2]'>
        <img src={logo} alt="logo" className='px-3'/>
        <NavItems />
    </nav>
  )
}
