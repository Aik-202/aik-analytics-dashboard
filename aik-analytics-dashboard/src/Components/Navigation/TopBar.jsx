import React from 'react'
import { arrowDown, calendarIcon, justin, notificationIcon, searchIcon } from '../../Data'

export default function TopBar() {
  const [other, setOther] = React.useState(false)
  let theme = JSON.parse(localStorage.getItem("pageTheme"));
  React.useEffect(() => {
    if (theme === "DARK") {
      setOther(true)
    } else {
      setOther(false)
    }
  }, [theme])
  console.log(other)
  return (
    <nav className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 
    md:flex-row justify-between w-full px-3 py-3 lg:bg-[#F7F8FA] lg:dark:bg-[#131A2B]
    md:border-[1px] md:border-solid md:border-[#EBECF2] md:items-center 
    dark:border-[#111827] text-[#26282C]'>
      <p className='text-xl dark:text-white font-semibold'>Dashboard</p>

      <div className='flex flex-col-reverse space-y-reverse space-y-5 
      md:space-y-0 md:flex-row lg:space-x-5 items-start md:items-center dark:text-white'>
        <div className='relative w-full self-center md:w-auto md:self-auto'>
          <input type="search" name="search" id="search" placeholder='Search...' 
          className='px-3 pl-8 py-2 border-solid w-full md:w-auto border-[1px] 
          border-[#DADDDD] bg-white rounded-3xl dark:bg-[#1f2937] 
          dark:text-white dark:border-[#d1d5db] focus:outline-none'/>
          <img src={searchIcon} alt="search-icon" className='absolute top-3 left-2' />
        </div>

        <div className='flex flex-row justify-between w-full md:w-auto md:space-x-5 
        items-center'>
          <div className='diff flex flex-row space-x-3 items-center text-sm font-medium'>
            <img src={calendarIcon} alt="calender" className='dark:bg-[#d1d5db] 
            dark:rounded-full dark:p-1' />
            <p>November 15, 2023</p>
          </div>

          <figure className='flex items-center p-3 rounded-full border-[0.77px] 
          border-solid border-[#DADDDD] dark:border-[#d1d5db] dark:bg-[#d1d5db]'>
            <img src={notificationIcon} alt="notification" />
          </figure>
        </div>

        <div className='flex flex-row space-x-3 p-2 rounded-[28px] self-end 
        md:self-auto items-center border-[1px] 
        border-solid border-[#DADDDD] dark:border-[#d1d5db]'>
          <img src={justin} alt="justin" className='self-center md:self-auto' />
          <div className='diff flex flex-col -space-y-1 text-base'>
            <p>Justin Bergson</p>
            <p className='text-sm text-[#787486]'>Justin@gmail.com</p>
          </div>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        
      </div>
    </nav>
  )
}
