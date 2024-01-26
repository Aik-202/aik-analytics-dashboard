import { ProgressBar, Title } from '@tremor/react'
import React from 'react'
import { topPlateform } from '../../Data/demo'

export default function TopPlateform() {
  return (
    <section className='w-full lg:w-[40%] px-5 py-3 flex flex-col space-y-5 rounded-xl 
    shadow-sm bg-white'>
    <Title className='flex flex-row justify-between'>
      <span>Top Platform</span>
      <span className='text-[#34CAA5]'>See All</span>
    </Title>
    {topPlateform.map((list) => <div key={list.id} className='flex flex-col space-y-3'>
      <Title>{list.name}</Title>
      <ProgressBar value={list.value} color={list.id == 1 ? '#6160DC'
      : list.id == 2 ? '#54C5EB' 
      : list.id == 3 ? '#FFB74A'
      : '#FF4A55'} />
      <div className='flex flex-row justify-between w-full'>
        <p>${list.amount.toLocaleString()}</p>
        <p>{list.percent}</p>
      </div>
    </div>)}
    </section>
  )
}
