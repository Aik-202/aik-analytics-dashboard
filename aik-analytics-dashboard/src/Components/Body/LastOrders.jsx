import React from 'react'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { lastOrder } from '../../Data/demo';
import { viewIcon } from '../../Data';


export default function LastOrders() {
  return (
    <Card className='reveal w-full lg:w-[40rem] xl:w-[45rem]'>
    <Title className='flex flex-row justify-between'>
      <span className='font-semibold'>Last Orders</span>
      <span className='text-[#34CAA5] font-medium'>See All</span>
    </Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell className='w-[30rem] text-[#9CA4AB] text-base font-medium'>Name</TableHeaderCell>
          <TableHeaderCell className='text-[#9CA4AB] text-base font-medium'>Date</TableHeaderCell>
          <TableHeaderCell className='text-[#9CA4AB] text-base font-medium'>Amount</TableHeaderCell>
          <TableHeaderCell className='text-[#9CA4AB] text-base font-medium'>Status</TableHeaderCell>
          <TableHeaderCell className='text-[#9CA4AB] text-base font-medium'>Invoice</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lastOrder.map((item) => (
          <TableRow key={item.id}>
            <TableCell className='flex flex-row space-x-3 items-center'>
              <img src={item.img} alt={item.name} />
              <p className='text-[#3A3F51] text-base font-medium dark:text-[#4b5563]'>{item.name}</p>
            </TableCell>
            <TableCell>
              <Text className='text-[#737373] font-normal text-base'>{item.date}</Text>
            </TableCell>
            <TableCell>
              <Text className='text-[#0D062D] text-base font-medium'>${item.amount.toLocaleString()}</Text>
            </TableCell>
            <TableCell className={`${item.status == 'Paid' ? 'text-[#34CAA5]' 
            : 'text-[#ED544E]'} text-base font-normal`}>{item.status}</TableCell>
            <TableCell className='flex flex-row space-x-3 items-center'>
              <img src={viewIcon} alt="view-icon" />
              <p className='text-[#0D062D] font-normal text-sm dark:text-[#4b5563]'>View</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}
