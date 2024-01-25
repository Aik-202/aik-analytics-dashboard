import React from 'react'
import { BarChart, Card, Title } from "@tremor/react";
import { chartdata } from '../../Data/demo';

export default function SalesTrend() {
    const valueFormatter = (number) => `$ ${(number)}.000`;
  return (
    <Card className='w-[50rem]'>
    <Title>Sales Trend</Title>
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
