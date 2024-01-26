import React from 'react'
import { bottomList, dashboardList } from '../../Data/demo'
import { darkMode, lightMode } from '../../Data'

export default function NavItems() {
    const [mode, setMode] = React.useState(false)
    // variable for dark mode
    let element = document.body;

    // element.addEventListener('load', () => {
    //     let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

    //     if (getTheme === "DARK") {
    //     element.classList.toggle("dark");
    //     } else {
    //         element.classList.remove("dark");
    //     }
    // })

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
    element.classList.toggle("dark");
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

    
    // const getTheme = () => {
    //     let theme = JSON.parse(localStorage.getItem("pageTheme"));
    //     let element = document.body;
    //     if (theme === "DARK") {
    //       element.classList.toggle("dark");
    //     } else {
    //         element.classList.remove("dark");
    //     }
    // }
    

  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col space-y-6'>
            <ul className='flex flex-col space-y-6'>
            {dashboardList.map((list) => <li className={`border-[3px] border-solid 
            border-transparent w-full px-4
            ${list.id == 1 ? 'border-r-[#0D062D] dark:border-r-white' : 'border-r-transparent'}
            `} key={list.id}>
                <img src={list.img1} alt={list.title} />
            </li>)}
            </ul>
            <figure className='flex flex-col space-y-6 items-center bg-white dark:bg-[#1f2937]
            rounded-full py-2 mx-2'>
                <img src={lightMode} alt="light-mode" className='bg-[#34CAA5] dark:bg-transparent p-2 
                rounded-full' 
                onClick={light}/>
                <img src={darkMode} alt="dark-mode" className='bg-transparent dark:bg-white p-2 
                rounded-full w-[40px]' 
                onClick={dark}/>
            </figure>
        </div>
        <ul className='flex flex-col space-y-6 pb-3'>
            {bottomList.map((list) => <li className='px-4' key={list.id}>
                <img src={list.img1} alt={list.title} />
            </li>)}
        </ul>
    </div>
  )
}
