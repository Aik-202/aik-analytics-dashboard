import { ProgressBar, Title } from '@tremor/react'
import React from 'react'
import { topPlateform } from '../../Data/demo'

export default function TopPlateform() {
  return (
    <section className='w-full lg:w-[40%] px-5 py-3 flex flex-col space-y-5 rounded-xl 
    shadow-sm bg-white dark:bg-[#111827]'>
    <Title className='flex flex-row justify-between'>
      <span className='font-semibold'>Top Platform</span>
      <span className='text-[#34CAA5] font-medium'>See All</span>
    </Title>
    {topPlateform.map((list) => <div key={list.id} className='flex flex-col space-y-3'>
      <Title className='text-[#22242C] font-semibold text-lg'>{list.name}</Title>
      <ProgressBar value={list.value} color={list.id == 1 ? '#6160DC'
      : list.id == 2 ? '#54C5EB' 
      : list.id == 3 ? '#FFB74A'
      : '#FF4A55'} />
      <div className='flex flex-row justify-between w-full dark:text-white 
      text-[#525252] font-normal text-lg'>
        <p>${list.amount.toLocaleString()}</p>
        <p>{list.percent}</p>
      </div>
    </div>)}
    </section>
  )
}
