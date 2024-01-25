import React from 'react'
import { arrowDown, calendarIcon, justin, notificationIcon, searchIcon } from '../../Data'

export default function TopBar() {
  return (
    <nav className='flex flex-row justify-between w-full px-3 py-3 bg-[#F7F8FA] 
    border-[1px] border-solid border-[#EBECF2] items-center'>
      <p className='text-xl'>Dashboard</p>

      <div className='flex flex-row space-x-5 items-center'>
        <div className='relative'>
          <input type="search" name="search" id="search" placeholder='Search...' 
          className='px-3 pl-8 py-2 border-solid  
          border-[1px] border-[#DADDDD] bg-white rounded-3xl'/>
          <img src={searchIcon} alt="search-icon" className='absolute top-3 left-2' />
        </div>

        <div className='flex flex-row space-x-3 items-center text-sm'>
          <img src={calendarIcon} alt="calender" />
          <p>November 15, 2023</p>
        </div>

        <figure className='flex items-center p-3 rounded-full border-[0.77px] 
        border-solid border-[#DADDDD]'>
          <img src={notificationIcon} alt="notification" />
        </figure>

        <div className='flex flex-row space-x-3 p-2 rounded-[28px] items-center border-[1px] 
        border-solid border-[#DADDDD]'>
          <img src={justin} alt="justin" />
          <div className='flex flex-col -space-y-1 text-base'>
            <p>Justin Bergson</p>
            <p className='text-sm'>Justin@gmail.com</p>
          </div>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        
      </div>
    </nav>
  )
}
