import React from 'react'
import { bottomList, dashboardList } from '../../Data/demo'
import { darkMode, lightMode } from '../../Data'

export default function NavItems() {
  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col space-y-5'>
            <ul className='flex flex-col space-y-5'>
            {dashboardList.map((list) => <li className={`border-[3px] border-solid 
            border-transparent w-full px-3
            ${list.id == 1 ? 'border-r-[#0D062D]' : 'border-r-transparent'}
            `} key={list.id}>
                <img src={list.img1} alt={list.title} />
            </li>)}
            </ul>
            <figure className='flex flex-col space-y-5 items-center bg-white 
            rounded-full py-2 mx-2'>
                <img src={lightMode} alt="light-mode" className='bg-[#34CAA5] 
                p-2 rounded-full' />
                <img src={darkMode} alt="dark-mode" />
            </figure>
        </div>
        <ul className='flex flex-col space-y-5 pb-3'>
            {bottomList.map((list) => <li className='px-4' key={list.id}>
                <img src={list.img1} alt={list.title} />
            </li>)}
        </ul>
    </div>
  )
}
