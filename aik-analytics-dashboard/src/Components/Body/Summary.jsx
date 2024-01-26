import React from 'react'
import { summaryList } from '../../Data/demo'
import { Card, Metric, Subtitle, Text} from '@tremor/react'
import { loss, profit, trendingDown, trendingUp } from '../../Data'

export default function Summary() {
  return (
    <section className='flex items-center justify-center'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {summaryList.map((list) => <Card className='p-3 py-4 w-[18rem] md:w-[15rem] lg:w-[14rem] xl:w-[15rem]' key={list.id}>
          <figure className='flex flex-row justify-between items-center mb-4'>
            <img src={list.img} alt="card-icon" className='p-2 rounded-full border-[0.77px] 
          border-solid border-[#DADDDD] dark:border-[#1f2937]' />
            <img src={list.state == 'profit' ? profit : loss} alt={list.state} />
          </figure>
          <div className='flex flex-col space-y-3 mb-5'>
            <Subtitle className='text-lg font-medium'>{list.title}</Subtitle>
            <Metric className='text-[#3A3F51] text-2xl'>{list.total}</Metric>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <div className={`flex flex-row space-x-1 self-center items-center rounded-full bg-opacity-[12%]
            ${list.state == 'profit' ? 'bg-[#34CAA5] text-[#34CAA5]'
            : 'bg-[#ED544E] text-[#ED544E]'}
            px-2 py-1 text-xs`}>
              <img src={list.state == 'profit' ? trendingUp : trendingDown} alt="trend-icon" />
              <p>23,5%</p>
            </div>
            <Text className='text-[#606060] font-normal text-sm'>vs. previous month</Text>
            {/* <p></p> */}
          </div>
        </Card>)}
      </section>
    </section>
  )
}
