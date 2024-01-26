import { Card } from '@tremor/react'
import React from 'react'

export default function ToolTip(props) {
  return (
    <Card className={`absolute z-10 flex-row -top-14 -left-2 md:-top-1 md:left-16 
    bg-white w-max py-2 dark:text-[#d1d5db]
    ${props.show ? 'flex' : 'hidden'}
    `}>
        {/* <div className='tip fixed border-r-[#EDF2F7]'></div> */}
        <p>{props.tip}</p>
    </Card>
  )
}
