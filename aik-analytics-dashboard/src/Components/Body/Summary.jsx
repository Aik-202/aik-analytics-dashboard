import React from 'react'
import { summaryList } from '../../Data/demo'
import { Card, Metric, Subtitle, Text} from '@tremor/react'
import { loss, profit, trendingDown, trendingUp } from '../../Data'

export default function Summary() {
  return (
    <section className='grid grid-cols-2 gap-5 pr-5'>
      {summaryList.map((list) => <Card className='p-3 py-4 w-[250px]' key={list.id}>
        <figure className='flex flex-row justify-between items-center mb-4'>
          <img src={list.img} alt="card-icon" className='p-2 rounded-full border-[0.77px] 
        border-solid border-[#DADDDD]' />
          <img src={list.state == 'profit' ? profit : loss} alt={list.state} />
        </figure>
        <div className='flex flex-col space-y-3 mb-5'>
          <Subtitle className='text-lg'>{list.title}</Subtitle>
          <Metric>{list.total}</Metric>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <div className={`flex flex-row space-x-1 items-center rounded-full bg-opacity-[12%]
          ${list.state == 'profit' ? 'bg-[#34CAA5] text-[#34CAA5]'
          : 'bg-[#ED544E] text-[#ED544E]'}
          px-2 py-1 text-xs`}>
            <img src={list.state == 'profit' ? trendingUp : trendingDown} alt="trend-icon" />
            <p>23,5%</p>
          </div>
          <Text>vs. previous month</Text>
          {/* <p></p> */}
        </div>
      </Card>)}
    </section>
  )
}
