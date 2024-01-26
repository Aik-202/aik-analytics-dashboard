import React from 'react'
import { arrowDown, calendarIcon, darkMode, justin, lightMode, notificationIcon, searchIcon } from '../../Data'
import { Card } from '@tremor/react'

export default function TopBar() {
  const [mode, setMode] = React.useState(false)
  const [lightHover, setLightHover] = React.useState(false)
  const [darkHover, setDarkHover] = React.useState(false)

  // variable for dark mode
  let element = document.body;

  //lightmode
  const light = () => {
    element.classList.remove("dark");
    setMode(false);
    //set theme
    var theme
    if (element.classList == "dark") {
    theme = "DARK"
    } else {
    theme = "LIGHT"
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
  }

  //darkmode
  const dark = () => {
  element.classList.add("dark");
  setMode(true);
  //set theme
  var theme
  if (element.classList == "dark") {
      theme = "DARK"
  } else {
      theme = "LIGHT"
  }
  localStorage.setItem("pageTheme", JSON.stringify(theme));
  }
  return (
    <nav className='reveal flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 
    lg:flex-row justify-between w-full px-3 py-3 lg:bg-[#F7F8FA] lg:dark:bg-[#131A2B]
    md:border-[1px] md:border-solid md:border-[#EBECF2] md:items-center 
    dark:border-[#111827] text-[#26282C]'>
      <p className='text-xl dark:text-white font-semibold'>Dashboard</p>

      <div className='flex flex-col-reverse space-y-reverse space-y-5 
      md:space-y-0 md:flex-row md:space-x-3 lg:space-x-5 items-start md:items-center dark:text-white'>

        <figure className='md:hidden self-end flex flex-row space-x-6 items-center bg-white 
        dark:bg-[#1f2937] border-[1px] border-solid border-transparent 
        dark:border-[#d1d5db] rounded-full px-2 py-1'>
          <div className='relative' onMouseOver={(e) => setLightHover(true)} 
          onMouseLeave={(e) => setLightHover(false)}>
            <img src={lightMode} alt="light-mode" className='bg-[#34CAA5] dark:bg-transparent p-2 
            rounded-full' 
            onClick={light}/>
            <Card className={`absolute z-10 flex-row -top-14 -left-12 md:-top-1 md:left-16 
            bg-white w-max py-2 dark:text-[#d1d5db]
            ${lightHover? 'flex' : 'hidden'}
            `}>
                {/* <div className='tip fixed border-r-[#EDF2F7]'></div> */}
                <p>Light Mode</p>
            </Card>
          </div>
          <div className='relative' onMouseOver={(e) => setDarkHover(true)}
          onMouseLeave={(e) => setDarkHover(false)}>
            <img src={darkMode} alt="dark-mode" className='bg-transparent dark:bg-[#d1d5db] p-2 
            rounded-full w-[40px]' 
            onClick={dark}/>
              <Card className={`absolute z-10 flex-row -top-14 -left-16 md:-top-1 md:left-16 
            bg-white w-max py-2 dark:text-[#d1d5db]
            ${darkHover? 'flex' : 'hidden'}
            `}>
                {/* <div className='tip fixed border-r-[#EDF2F7]'></div> */}
                <p>Dark Mode</p>
            </Card>
            </div>
        </figure>

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
          <img src={arrowDown} alt="arrow-down" className='dark:rounded-full dark:px-1 dark:py-[7px]
          dark:bg-[#d1d5db]' />
        </div>
        
      </div>
    </nav>
  )
}
