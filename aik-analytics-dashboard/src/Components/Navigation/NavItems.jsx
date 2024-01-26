import React from 'react'
import { bottomList, dashboardList } from '../../Data/demo'
import { darkMode, lightMode } from '../../Data'
import ToolTip from '../Body/ToolTip';
import { Card } from '@tremor/react';

export default function NavItems() {
    const [mode, setMode] = React.useState(false)
    const [lightHover, setLightHover] = React.useState(false)
    const [darkHover, setDarkHover] = React.useState(false)
    const [elem, setElem] = React.useState()

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
    <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col space-y-6'>
            <ul className='flex flex-row justify-between md:flex-col md:space-y-6'>
            {dashboardList.map((list) => <li className={` relative border-[3px] border-solid 
            border-transparent w-full px-4 py-3 md:py-0 hover:border-t-[#0D062D] 
            hover:dark:border-t-[#d1d5db] hover:md:border-t-transparent hover:md:dark:border-t-transparent 
            hover:md:border-r-[#0D062D] hover:md:dark:border-r-[#d1d5db]
            ${list.id == 1 ? 'dark:bg-[#d1d5db] dark:rounded-t-xl  md:dark:rounded-r-xl border-t-[#0D062D] dark:border-t-[#d1d5db] md:border-t-transparent md:dark:border-t-transparent md:border-r-[#0D062D] md:dark:border-r-[#d1d5db]' 
            : 'border-r-transparent'}
            `} key={list.id} onMouseOver={(e) => setElem(e.target.id)} 
            onMouseLeave={() => setElem(0)}>
                <img src={list.img1} alt={list.title} id={list.id}/>
                <ToolTip tip={list.title} show={elem == list.id ? true : false}/>
            </li>)}
            </ul>
            <figure className='hidden md:flex flex-col space-y-6 items-center bg-white dark:bg-[#1f2937]
            rounded-full py-2 mx-2'>
                <div className='relative' onMouseOver={(e) => setLightHover(true)} 
                onMouseLeave={(e) => setLightHover(false)}>
                    <img src={lightMode} alt="light-mode" className='bg-[#34CAA5] dark:bg-transparent p-2 
                    rounded-full' 
                    onClick={light}/>
                    <Card className={`absolute z-10 flex-row -top-14 -left-2 md:-top-1 md:left-16 
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
                     <Card className={`absolute z-10 flex-row -top-14 -left-2 md:-top-1 md:left-16 
                    bg-white w-max py-2 dark:text-[#d1d5db]
                    ${darkHover? 'flex' : 'hidden'}
                    `}>
                        {/* <div className='tip fixed border-r-[#EDF2F7]'></div> */}
                        <p>Dark Mode</p>
                    </Card>
                </div>
            </figure>
        </div>
        <ul className='hidden md:flex flex-col space-y-6 pb-3'>
            {bottomList.map((list) => <li className='relative px-4 border-[3px] border-solid 
            border-transparent hover:border-t-[#0D062D] hover:dark:border-t-[#d1d5db] 
            hover:md:border-t-transparent hover:md:dark:border-t-transparent hover:md:border-r-[#0D062D] 
            hover:md:dark:border-r-[#d1d5db]' key={list.id} onMouseOver={(e) => setElem(e.target.id)}
            onMouseLeave={() => setElem(0)}>
                <img src={list.img1} alt={list.title} id={list.id}/>
                <ToolTip tip={list.title} show={elem == list.id ? true : false} />
            </li>)}
        </ul>
    </div>
  )
}
