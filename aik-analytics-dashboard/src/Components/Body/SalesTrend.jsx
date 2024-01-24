import React from 'react'
import { BarChart, Card, Title } from "@tremor/react";
import { chartdata } from '../../Data/demo';

export default function SalesTrend() {
    const valueFormatter = (number) => `$ ${(number)}.000`;
  return (
    <Card>
    <Title>Sales Trend</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Sales Value"]}
      colors={["#34CAA5"]}
      valueFormatter={valueFormatter}
      yAxisWidth={50}
      maxValue={50}
    />
  </Card>
  )
}
