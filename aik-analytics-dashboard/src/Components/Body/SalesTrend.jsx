import React from 'react'
import { BarChart, Card, Title } from "@tremor/react";
import { chartdata } from '../../Data/demo';

export default function SalesTrend() {
    const valueFormatter = (number) => `${(number)}.000`;
  return (
    <Card className='reveal h-max w-full lg:w-[30rem] xl:w-[45rem] font-semibold'>
    <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row 
    justify-between items-center'>
      <Title className='font-semibold'>Sales Trend</Title>
      <div className='flex flex-row space-x-5 items-center'>
        <p className='dark:text-white text-[#3A3F51] font-medium text-sm'>Short by : </p>
        <select name="interval" id="interval" className='rounded-full px-3 py-1 
        focus:outline-none border-solid border-[2px] border-[#E1DFDF] text-[#3A3F51] 
        dark:border-[#111827] dark:bg-[#1f2937] dark:text-white text-sm font-normal'>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
    </div>
    <BarChart
      className="mt-6 cursor-pointer"
      data={chartdata}
      index="name"
      categories={["Sales Value"]}
      colors={["#34CAA5"]}
      valueFormatter={valueFormatter}
      yAxisWidth={75}
      maxValue={50}
    />
  </Card>
  )
}
